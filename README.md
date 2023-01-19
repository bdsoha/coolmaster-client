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

![Banner](coolautomation.jpg)

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
    port:   1234,             // Optional, defaults to `10103`
    secure: true,             // Optional, defaults to `false`
    device: '443B960055F0',
})

const results = await client.ls2()
```

### Using Environment Variables

Instead of using the `ConnectionConfigs`, you can opt-in to use environment variables.
The lookup precedence is as follows:

1. Values found in the `ConnectionConfigs`.
2. Environment variable equivalent.
3. Default values *(if applicable)*.

| **Name**                   | **Default** |
|----------------------------|-------------|
| `COOLMASTER_CLIENT_HOST`   | `undefined` |
| `COOLMASTER_CLIENT_PORT`   | `10103`     |
| `COOLMASTER_CLIENT_SECURE` | `false`     |
| `COOLMASTER_CLIENT_DEVICE` | `undefined` |
