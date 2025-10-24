# Changelog

## 1.0.0-alpha.7 (2025-10-24)

Full Changelog: [v1.0.0-alpha.6...v1.0.0-alpha.7](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.6...v1.0.0-alpha.7)

### Features

* add agent template route to config ([a379f18](https://github.com/letta-ai/letta-node/commit/a379f189b301a71a7f229561327481ec9510ef93))
* add new archive routes to sdk ([389a103](https://github.com/letta-ai/letta-node/commit/389a103835dac6e45720e8c640c4f46050bb0320))
* add openai-style include param for agents relationship loading ([b5d9129](https://github.com/letta-ai/letta-node/commit/b5d91299de0444d848d9d340c1f4e97fcf99003c))
* attach/detach identities route on blocks and agents, move archives attach/detach routes to agents ([3598ad8](https://github.com/letta-ai/letta-node/commit/3598ad8be4b5ba0bc8a52d8804aa356e451fbbb8))
* deprecate append copy suffix, add override name [LET-5779] ([9315a1d](https://github.com/letta-ai/letta-node/commit/9315a1d1ce68b0dc3c569a0798dc57a03f9da945))
* deprecate use_assistant_message in list endpoints ([01dc718](https://github.com/letta-ai/letta-node/commit/01dc71801be25019afd1f78897f549e61b50fa83))
* fix patch approvals endpoint incorrectly using queyr params ([7afe5c8](https://github.com/letta-ai/letta-node/commit/7afe5c8f4e59ea35e227741de29656be9f8d7169))
* remove relationship fields on identities ([46760eb](https://github.com/letta-ai/letta-node/commit/46760ebf5f756ac46ad49fedcfaa6376aa765990))
* remove run tool for external sdk ([7553ec2](https://github.com/letta-ai/letta-node/commit/7553ec211dec69ff9c65492f2810abd5d165c322))
* remove unused max length parameter ([52583f4](https://github.com/letta-ai/letta-node/commit/52583f440712308078b2a7df068500f056ed153c))
* rename multi agent group to managed group ([c28d519](https://github.com/letta-ai/letta-node/commit/c28d5193c93e5388ec9ca439e9fbfda0ac9a14b3))
* replace agent.identity_ids with agent.identities ([d030ea8](https://github.com/letta-ai/letta-node/commit/d030ea82e6e23c691c60bc47268e50db1a02b3ad))
* reset message incorrectly using query param ([8887c58](https://github.com/letta-ai/letta-node/commit/8887c5802c50f782562572c650d8b7ffcc0d9fa6))
* Revert "feat: revise mcp tool routes [LET-4321]" ([839bdbc](https://github.com/letta-ai/letta-node/commit/839bdbcb891119452b16554bb58737c6bb3ccefe))
* Support embedding config on the archive [LET-5832] ([c464e03](https://github.com/letta-ai/letta-node/commit/c464e035785567695f998d18c661b1cfb4a35ed0))


### Bug Fixes

* sdk config code gen ([7c34069](https://github.com/letta-ai/letta-node/commit/7c340694b03d629e1a70081ff392440c30c59023))


### Chores

* add context_window_limit and max_tokens to UpdateAgent [LET-3743] [LET-3741] ([e8a7bd3](https://github.com/letta-ai/letta-node/commit/e8a7bd347e8973beefcf467b8da6532b39f74aa1))

## 1.0.0-alpha.6 (2025-10-22)

Full Changelog: [v0.0.1...v1.0.0-alpha.6](https://github.com/letta-ai/letta-node/compare/v0.0.1...v1.0.0-alpha.6)

### Features

* **api:** api update ([#20](https://github.com/letta-ai/letta-node/issues/20)) ([9c6a2a0](https://github.com/letta-ai/letta-node/commit/9c6a2a062121c4859ba0178bc447cbc22249c578))
* **api:** api update ([#21](https://github.com/letta-ai/letta-node/issues/21)) ([1435caf](https://github.com/letta-ai/letta-node/commit/1435cafb5029fdface86014011c49116167521f6))
* **api:** api update ([#24](https://github.com/letta-ai/letta-node/issues/24)) ([6a95cc2](https://github.com/letta-ai/letta-node/commit/6a95cc295c316aaa4c7b0ed9814d824e848e0bb5))
* **api:** api update ([#26](https://github.com/letta-ai/letta-node/issues/26)) ([3a49ff5](https://github.com/letta-ai/letta-node/commit/3a49ff599ad1e6d13911deede4072b5d85b1f0eb))
* **api:** api update ([#29](https://github.com/letta-ai/letta-node/issues/29)) ([2dac9f7](https://github.com/letta-ai/letta-node/commit/2dac9f7d56698a16448ad177558687c4283652d3))
* **api:** api update ([#30](https://github.com/letta-ai/letta-node/issues/30)) ([11b34ce](https://github.com/letta-ai/letta-node/commit/11b34ce4a4dfabd732e997110efa8dc3b92bb7bb))
* update prompting for tool call test ([#31](https://github.com/letta-ai/letta-node/issues/31)) ([31ec1b0](https://github.com/letta-ai/letta-node/commit/31ec1b0ed11b67c7bf34188ca4c17929bc8b1b3a))


### Bug Fixes

* remove system message ([#21](https://github.com/letta-ai/letta-node/issues/21)) ([8a6f13c](https://github.com/letta-ai/letta-node/commit/8a6f13c2d16896693247a97a78425434bec76338))
* rename coreMemory-&gt;block and archivalMemory->passage ([#18](https://github.com/letta-ai/letta-node/issues/18)) ([ebae279](https://github.com/letta-ai/letta-node/commit/ebae2797e1e502681367d639c87b5663be92aace))
* update tool name in test ([#29](https://github.com/letta-ai/letta-node/issues/29)) ([8c6086d](https://github.com/letta-ai/letta-node/commit/8c6086d628026fed19d870fc77f1abe00f6968aa))


### Chores

* ensure secrets are propagated to test env ([#13](https://github.com/letta-ai/letta-node/issues/13)) ([61c8c4d](https://github.com/letta-ai/letta-node/commit/61c8c4d25bfb10173988664b85a0d8ee956293e7))
* **internal:** codegen related update ([#22](https://github.com/letta-ai/letta-node/issues/22)) ([5ce0bf8](https://github.com/letta-ai/letta-node/commit/5ce0bf8ce2a94826a094070bd3762a1efd39f273))
* **internal:** fix some typos ([#28](https://github.com/letta-ai/letta-node/issues/28)) ([8bf6e15](https://github.com/letta-ai/letta-node/commit/8bf6e154e172d094735f7d17b2f73be72abb1513))
* **internal:** remove unnecessary getRequestClient function ([#19](https://github.com/letta-ai/letta-node/issues/19)) ([b7cad3e](https://github.com/letta-ai/letta-node/commit/b7cad3eeaa6ebaaf5d1e85c275d3eb6215f2a275))
* **internal:** update isAbsoluteURL ([#23](https://github.com/letta-ai/letta-node/issues/23)) ([0aa3a19](https://github.com/letta-ai/letta-node/commit/0aa3a19721dab4e793eb21613853baf980bc9e6a))
* sync repo ([938daa2](https://github.com/letta-ai/letta-node/commit/938daa2b3f77f7437210c93459de106303b69035))
* unit testing ([#16](https://github.com/letta-ai/letta-node/issues/16)) ([42677dc](https://github.com/letta-ai/letta-node/commit/42677dcb7bc13658f9da92d828f6b57937b57848))
* update README ([692d72a](https://github.com/letta-ai/letta-node/commit/692d72a56aedc3f51d54e5157358e61645bfc6b3))
* update SDK settings ([551959e](https://github.com/letta-ai/letta-node/commit/551959e73dca1b5105a10a990ecda80a2cff8304))
* update SDK settings ([469762c](https://github.com/letta-ai/letta-node/commit/469762c5bb6828511b3cda1f4d7447053bdaa086))
* update test to camelCase ([#12](https://github.com/letta-ai/letta-node/issues/12)) ([87c62e5](https://github.com/letta-ai/letta-node/commit/87c62e5e18f3d9984c13f95ca809cdf5cae166c4))
