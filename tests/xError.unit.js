'use strict';

/* eslint-disable no-unused-expressions */

const { expect } = require('chai');

const HttpStatus = require('http-status');
const verror = require('../index');

describe('verror unit tests', () => {
  it('throws correct error class', () => {
    const throws = () => {
      throw new verror('boom');
    };

    expect(throws).to.throw(verror);
  });

  it('throws error with inherited error', () => {
    const throws = () => {
      throw new verror('boom');
    };

    expect(throws).to.throw(Error);
  });

  it('throws error with inherited error class', async () => {
    const throws = async () => {
      throw new verror('boom');
    };

    const error = await throws().catch((err) => err);
    expect(error).to.be.instanceOf(Error);
  });

  it('throws error with expected properties', async () => {
    const throws = async () => {
      throw new verror('boom');
    };

    const error = await throws().catch((err) => err);
    expect(error.message).to.eql('boom');
    expect(error.code).to.eql(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(error.stack).to.not.be.undefined;
    expect(error.name).to.eql('verror');
    expect(error.dateTime.valueOf()).to.be.within(Date.now() - 10, Date.now() + 10);
    expect(error.data).to.eql(undefined);
  });

  it('throws error with specific error code', async () => {
    const throws = async () => {
      throw new verror('boom', HttpStatus.BAD_REQUEST);
    };

    const error = await throws().catch((err) => err);
    expect(error.message).to.eql('boom');
    expect(error.code).to.eql(HttpStatus.BAD_REQUEST);
    expect(error.stack).to.not.be.undefined;
    expect(error.name).to.eql('verror');
    expect(error.dateTime.valueOf()).to.be.within(Date.now() - 10, Date.now() + 10);
    expect(error.data).to.eql(undefined);
  });

  it('throws error with extra data', async () => {
    const throws = async () => {
      throw new verror('boom', undefined, { foo: 'bar' });
    };

    const error = await throws().catch((err) => err);
    expect(error.message).to.eql('boom');
    expect(error.code).to.eql(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(error.stack).to.not.be.undefined;
    expect(error.name).to.eql('verror');
    expect(error.dateTime.valueOf()).to.be.within(Date.now() - 10, Date.now() + 10);
    expect(error.data).to.eql({ foo: 'bar' });
  });
});
