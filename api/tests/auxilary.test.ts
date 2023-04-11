import {
  test, expect, vi, describe, afterEach,
} from 'vitest';
import { getJwtSecret, getJwtExpirationPeriod } from '../src/env/getters';
import { restoreEnvAfterEach } from './helpers/env';
import { ctx } from './helpers/server';
import prisma from '../src/database';

restoreEnvAfterEach();

test('Env: jwt expiration in ms format', async () => {
  process.env.JWT_EXPIRATION_PERIOD = '5d';
  expect(getJwtExpirationPeriod()).toBe('5d');
});

test('Env: production has jwt secret defined', async () => {
  process.env.JWT_SECRET = '';
  process.env.NODE_ENV = 'production';
  expect(getJwtSecret).toThrowError('JWT_SECRET is not defined');
});

test('Env: dev environment has jwt secret automatically set', async () => {
  process.env.JWT_SECRET = '';
  expect(getJwtSecret()).toBe('dev');
});

test('Env: jwt expiration automatically throws if invalid', async () => {
  process.env.JWT_EXPIRATION_PERIOD = 'lol';
  expect(getJwtExpirationPeriod).toThrowError('JWT_EXPIRATION_PERIOD must be a number of seconds or ms string');
});

test('Env: jwt expiration automatically set if not provided', async () => {
  process.env.JWT_EXPIRATION_PERIOD = '';
  expect(getJwtExpirationPeriod()).toBe('7d');
});

test('Env: jwt expiration in seconds format', async () => {
  process.env.JWT_EXPIRATION_PERIOD = '3600';
  expect(getJwtExpirationPeriod()).toBe('1h');
});

describe('Healthz', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  test('healthz: returns 200', async () => {
    // mocking `prisma` is not straighforward because pothos builder
    // depends on it and ts checks break.
    vi.spyOn(prisma.user, 'findFirst').mockImplementationOnce(async () => null as any);
    const url = `${ctx.baseUrl}/healthz`;
    const res = await fetch(url);
    expect(res.status).toBe(200);
    const json: any = await res.json();
    expect(json.status).toBe('healthy');
  });

  test('healthz: returns 500', async () => {
    // mocking `prisma` is not straighforward because pothos builder
    // depends on it and ts checks break.
    vi.spyOn(prisma.user, 'findFirst').mockImplementationOnce(async () => { throw new Error('test'); });
    const url = `${ctx.baseUrl}/healthz`;
    const res = await fetch(url);
    expect(res.status).toBe(500);
    const json: any = await res.json();
    expect(json.status).toBe('DB failed initialization check');
  });
});
