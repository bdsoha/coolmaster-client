# CoolMasterNet Client

**CoolMasterNet API Client for TypeScript**

<a href="https://github.com/bdsoha/coolmaster-client/actions/workflows/test.yml">
    <img alt="GitHub Workflow" src="https://img.shields.io/github/actions/workflow/status/bdsoha/coolmaster-client/test.yml?branch=develop&logo=github&style=for-the-badge">
</a>

<a href="https://codeclimate.com/github/bdsoha/coolmaster-client">
    <img alt="Code Climate maintainability" src="https://img.shields.io/codeclimate/maintainability/bdsoha/coolmaster-client?logo=codeclimate&style=for-the-badge">
</a>

<a href="https://codeclimate.com/github/bdsoha/coolmaster-client">
    <img alt="Code Climate coverage" src="https://img.shields.io/codeclimate/coverage/bdsoha/coolmaster-client?logo=codeclimate&style=for-the-badge">
</a>

---

## Installation

```bash
npm install coolmaster-client
```

## Usage

```ts
import { CoolMasterNetClient } from 'coolmaster-client'

const client = CoolMasterNetClient.create({
    host:   '192.168.1.111',
    port:   1234,             # Optional, defaults to `10103`
    secure: true,             # Optional, defaults to `false`
    device: '443B960055F0',
})

const results = await client.ls2()
```
