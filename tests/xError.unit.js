'use strict';

/* eslint-disable no-unused-expressions */

const { expect } = require('chai');

const HttpStatus = require('http-status');
const XError = require('../index');

describe('XError unit tests', () => {
  it('throws correct error class', () => {
    const throws = () => {
      throw new XError('boom');
    };

    expect(throws).to.throw(XError);
  });

  it('throws error with inherited error', () => {
    const throws = () => {
      throw new XError('boom');
    };

    expect(throws).to.throw(Error);
  });

  it('throws error with inherited error class', async () => {
    const throws = async () => {
      throw new XError('boom');
    };

    const error = await throws().catch((err) => err);
    expect(error).to.be.instanceOf(Error);
  });

  it('throws error with expected properties', async () => {
    const throws = async () => {
      throw new XError('boom');
    };

    const error = await throws().catch((err) => err);
    expect(error.message).to.eql('boom');
    expect(error.code).to.eql(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(error.stack).to.not.be.undefined;
    expect(error.name).to.eql('XError');
    expect(error.dateTime.valueOf()).to.be.within(Date.now() - 10, Date.now() + 10);
    expect(error.data).to.eql(undefined);
  });

  it('throws error with specific error code', async () => {
    const throws = async () => {
      throw new XError('boom', HttpStatus.BAD_REQUEST);
    };

    const error = await throws().catch((err) => err);
    expect(error.message).to.eql('boom');
    expect(error.code).to.eql(HttpStatus.BAD_REQUEST);
    expect(error.stack).to.not.be.undefined;
    expect(error.name).to.eql('XError');
    expect(error.dateTime.valueOf()).to.be.within(Date.now() - 10, Date.now() + 10);
    expect(error.data).to.eql(undefined);
  });

  it('throws error with extra data', async () => {
    const throws = async () => {
      throw new XError('boom', undefined, { foo: 'bar' });
    };

    const error = await throws().catch((err) => err);
    expect(error.message).to.eql('boom');
    expect(error.code).to.eql(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(error.stack).to.not.be.undefined;
    expect(error.name).to.eql('XError');
    expect(error.dateTime.valueOf()).to.be.within(Date.now() - 10, Date.now() + 10);
    expect(error.data).to.eql({ foo: 'bar' });
  });
});
