
/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n/i18n.ts');

module.exports = withNextIntl({});
