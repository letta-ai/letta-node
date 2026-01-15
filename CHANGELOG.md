# Changelog

## 1.6.6 (2026-01-15)

Full Changelog: [v1.6.5...v1.6.6](https://github.com/letta-ai/letta-node/compare/v1.6.5...v1.6.6)

### Features

* add /v1/metadata/user [LET-6845] ([abff8de](https://github.com/letta-ai/letta-node/commit/abff8deaf038c2e0653fa64323aa3c264a8b7661))
* add /v1/runs/{run_id}/trace endpoint for OTEL traces ([4c64e3d](https://github.com/letta-ai/letta-node/commit/4c64e3d209c80f2c57ea2b3788c66e8077e0b5a4))
* add conversation_id filter to list runs ([572cde3](https://github.com/letta-ai/letta-node/commit/572cde3d5a4943beab6c6c1937dfed796a8e6737))
* Add conversation_id filtering to message endpoints ([4f0a0a7](https://github.com/letta-ai/letta-node/commit/4f0a0a78c00276b01e5bae708ba93b17c86594bf))
* add ids to archival memory search ([f6d8e39](https://github.com/letta-ai/letta-node/commit/f6d8e39af6d22384961ab68c0472ebf907dc503c))
* add pending approval field on agent state ([1bd34cb](https://github.com/letta-ai/letta-node/commit/1bd34cbf1519cbec6c8d590945e6d3dbe09003ef))
* add strict tool calling setting [LET-6902] ([751e177](https://github.com/letta-ai/letta-node/commit/751e1774f9456d50d2cb524e3da31469ca154015))
* add tags support to blocks ([45c106f](https://github.com/letta-ai/letta-node/commit/45c106fe9ed435fe35b0897c92d14a9452416ce4))
* allow for conversation-level isolation of blocks ([6469f15](https://github.com/letta-ai/letta-node/commit/6469f15b4a7d061db843b9d0fbc00f201e14224f))
* Revert "feat: add strict tool calling setting [LET-6902]" ([e8a772d](https://github.com/letta-ai/letta-node/commit/e8a772d77b0b80af79e41537a2dcc6ccda6015d2))


### Chores

* add scheduled message api ([d1ca076](https://github.com/letta-ai/letta-node/commit/d1ca076cef5c703aab270cf3243681b127adee74))
* break long lines in snippets into multiline ([ea2c33d](https://github.com/letta-ai/letta-node/commit/ea2c33dc37f583533460fd2c264e2e731c0812b6))
* fix typo in descriptions ([57e33d3](https://github.com/letta-ai/letta-node/commit/57e33d30374da36c0c1f197985f4a133642c3432))

## 1.6.5 (2026-01-06)

Full Changelog: [v1.6.4...v1.6.5](https://github.com/letta-ai/letta-node/compare/v1.6.4...v1.6.5)

### Features

* add conversation and conversation_messages tables for concurrent messaging ([d1f7897](https://github.com/letta-ai/letta-node/commit/d1f789786ae78d7b8daa0d1567f66107398c52be))
* add message_types filter to list messages endpoint ([177b06b](https://github.com/letta-ai/letta-node/commit/177b06b76d606bc3992ee72abbabb8dbff99843e))


### Chores

* mark agent.messages.stream endpoint as deprecated ([09caa82](https://github.com/letta-ai/letta-node/commit/09caa82ff5db59e06cd495e34d7019599ff46807))

## 1.6.4 (2026-01-04)

Full Changelog: [v1.6.3...v1.6.4](https://github.com/letta-ai/letta-node/compare/v1.6.3...v1.6.4)

### Features

* expose agent_id to the messages search api endpoint ([02e571d](https://github.com/letta-ai/letta-node/commit/02e571d3fc1ff614e8212a9caee46c257d418c0a))

## 1.6.3 (2026-01-03)

Full Changelog: [v1.6.2...v1.6.3](https://github.com/letta-ai/letta-node/compare/v1.6.2...v1.6.3)

### Features

* allow client-side tools to be specified in request ([9d286a8](https://github.com/letta-ai/letta-node/commit/9d286a8c11e9611239cf2016c328f09aeeb8f516))


### Bug Fixes

* validation failure on blocks retrieve [LET-6709] ([49de0a3](https://github.com/letta-ai/letta-node/commit/49de0a3f4ca86f2cd61d188987dda61c51be677c))

## 1.6.2 (2025-12-22)

Full Changelog: [v1.6.1...v1.6.2](https://github.com/letta-ai/letta-node/compare/v1.6.1...v1.6.2)

### Features

* add request-id for steps [LET-6587] ([e85178a](https://github.com/letta-ai/letta-node/commit/e85178aa530e1bdeb4410eb0d096ba53204d1de6))
* add retrieve_file endpoint to get file content ([9678655](https://github.com/letta-ai/letta-node/commit/9678655c6a5258f33725be888be69873770801d3))
* add zai provider support ([34e49db](https://github.com/letta-ai/letta-node/commit/34e49db1de3c8e2dc90e33b060d93f7a10ba3e1b))
* make embedding_config optional on agent creation ([a7e9ef0](https://github.com/letta-ai/letta-node/commit/a7e9ef029f7dd8fd453257239b50a2669473687c))


### Documentation

* add more examples ([a9d422a](https://github.com/letta-ai/letta-node/commit/a9d422ae40097044a387f1faf8558c7c0ec844cb))

## 1.6.1 (2025-12-18)

Full Changelog: [v1.6.0...v1.6.1](https://github.com/letta-ai/letta-node/compare/v1.6.0...v1.6.1)

### Bug Fixes

* fix summary message return for compaction ([e1df66e](https://github.com/letta-ai/letta-node/commit/e1df66ee1169844d1a920fca1cea733b6b951933))

## 1.6.0 (2025-12-18)

Full Changelog: [v1.5.0...v1.6.0](https://github.com/letta-ai/letta-node/compare/v1.5.0...v1.6.0)

### Features

* add compaction response ([c97bd45](https://github.com/letta-ai/letta-node/commit/c97bd45b0831d6110155ce14f6751e32aeee921c))

## 1.5.0 (2025-12-18)

Full Changelog: [v1.4.0...v1.5.0](https://github.com/letta-ai/letta-node/compare/v1.4.0...v1.5.0)

### Features

* add msg id to search endpoint response ([875cbac](https://github.com/letta-ai/letta-node/commit/875cbac4d11e9c26e9c7d5c94d380172c3fe689b))
* allow for configuration compaction and return message delta ([e7dce7b](https://github.com/letta-ai/letta-node/commit/e7dce7b6be4f20c385383483110ba19443f82d41))


### Chores

* add publish config ([#65](https://github.com/letta-ai/letta-node/issues/65)) ([f3ddf93](https://github.com/letta-ai/letta-node/commit/f3ddf933bb8cecaa4139a74f0beee0c4190ca0c9))

## 1.4.0 (2025-12-15)

Full Changelog: [v1.3.3...v1.4.0](https://github.com/letta-ai/letta-node/compare/v1.3.3...v1.4.0)

### Features

* add  `agent_id` to search results ([47e7d64](https://github.com/letta-ai/letta-node/commit/47e7d64990fe215a066a306de58898cdf25f4ae0))
* add `compaction_settings` to agents ([59ec25e](https://github.com/letta-ai/letta-node/commit/59ec25eb586d34a022e48e270a75476cec951422))
* Add max tokens exceeded to stop reasons [LET-6480] ([b0db847](https://github.com/letta-ai/letta-node/commit/b0db8478b11fedce6e53463557b771295b9bd004))
* refactor summarization and message persistence code ([71e60a4](https://github.com/letta-ai/letta-node/commit/71e60a405833a3e8b64cef8478ef4e469b681384))


### Bug Fixes

* fix `prompt_acknowledgement` usage ([fb347b2](https://github.com/letta-ai/letta-node/commit/fb347b20b438d2643ae88616c49a01acc02ae912))
* use `model` instead of `model_settings` ([e2d2951](https://github.com/letta-ai/letta-node/commit/e2d29514d2c31000d77b3e669bf49e52aae2db9e))

## 1.3.3 (2025-12-08)

Full Changelog: [v1.3.2...v1.3.3](https://github.com/letta-ai/letta-node/compare/v1.3.2...v1.3.3)

### Features

* add project id scoping backend changes ([b18bfc1](https://github.com/letta-ai/letta-node/commit/b18bfc12984d2eae57eb7ead98351a941d323b49))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([a237a15](https://github.com/letta-ai/letta-node/commit/a237a1570709249a795aed41778d9828253f8dae))
* **mcp:** return correct lines on typescript errors ([9df50bd](https://github.com/letta-ai/letta-node/commit/9df50bd5d1d2130dbac28d39a7b18cb4e876828d))


### Chores

* add letta source header ([#63](https://github.com/letta-ai/letta-node/issues/63)) ([c5af4a0](https://github.com/letta-ai/letta-node/commit/c5af4a0bdc36faaed8afac68a76c6e6ab8a803c0))
* add passages convenience sdk methods to agents route ([5de40e5](https://github.com/letta-ai/letta-node/commit/5de40e5bbe164a24abffb0be591d656a57c1c366))
* **internal:** codegen related update ([3f16695](https://github.com/letta-ai/letta-node/commit/3f16695f6b34d9aed665be3bca761a52f27f8c8f))
* **internal:** codegen related update ([6fa8eea](https://github.com/letta-ai/letta-node/commit/6fa8eea83ed90cab37e9fccce0c71de1e631e0b9))
* **internal:** upgrade eslint ([1593767](https://github.com/letta-ai/letta-node/commit/15937670c55df106ac6fae7500a046c15af81cdb))

## 1.3.2 (2025-12-01)

Full Changelog: [v1.3.1...v1.3.2](https://github.com/letta-ai/letta-node/compare/v1.3.1...v1.3.2)

### Features

* add delete/create template endpoint ([f08f54e](https://github.com/letta-ai/letta-node/commit/f08f54e2723ea8d4b7d71fed9ec1ed71e2157ba6))
* add tracking of advanced usage data (eg caching) [LET-6372] ([8d2645e](https://github.com/letta-ai/letta-node/commit/8d2645e67bf220c4f5d201105b3d87d736c953bd))
* patch tool calling endpoint and add SDK testing ([4d4c9aa](https://github.com/letta-ai/letta-node/commit/4d4c9aa91400758b0c0786dfbee7ee998f92ba10))


### Bug Fixes

* **core:** distinguish between null and 0 for prompt caching ([b0b4131](https://github.com/letta-ai/letta-node/commit/b0b41315c289aad6a777a0eff9b7a01891eef039))
* remove project_id from identities list ([9855e05](https://github.com/letta-ai/letta-node/commit/9855e05dcdd8346435a3be18d33453f9d7c56547))
* remove upsert base tools from sdk ([350ca06](https://github.com/letta-ai/letta-node/commit/350ca06226e4d480cac11bc8222fcaeeaefd72d6))


### Chores

* **client:** fix logger property type ([b1c28b1](https://github.com/letta-ai/letta-node/commit/b1c28b18f5585372f5162645c9cd1a4445601899))
* update endpoints ([6637e56](https://github.com/letta-ai/letta-node/commit/6637e56262768a47a7f0dfbe1b03eb5638b11358))

## 1.3.1 (2025-11-26)

Full Changelog: [v1.2.0...v1.3.1](https://github.com/letta-ai/letta-node/compare/v1.2.0...v1.3.1)

### Features

* add messages + passages to stainless.yml ([c4957d5](https://github.com/letta-ai/letta-node/commit/c4957d5e8ed5cff472325a9b393f754222b17954))
* Fix template alignment ([ceb1074](https://github.com/letta-ai/letta-node/commit/ceb1074159b0ecfc9a67a511af13f7a8f74e726c))
* query param validation block label, name, and search ([2ecce01](https://github.com/letta-ai/letta-node/commit/2ecce01c4d8a19290e68a944a918af5834986c91))
* run tool by  for a given agent ([37ed5b5](https://github.com/letta-ai/letta-node/commit/37ed5b551f6399d4f8512aff2fe0687457c0aaf7))
* Shub/let 6339 add endpoint for counting non hidden agents [LET-6339] ([4a04d5d](https://github.com/letta-ai/letta-node/commit/4a04d5d350283563bc87d3ad5cec2b7f4edc6ff7))
* structured outputs for anthropic ([a51ca49](https://github.com/letta-ai/letta-node/commit/a51ca49e6f58d2e8d1ed7ba70d1741cde708d5e5))
* structured outputs for openai [LET-6233] ([f4176a8](https://github.com/letta-ai/letta-node/commit/f4176a8293c2b9b561a9f9ac56b0d2fe37ab6131))


### Chores

* add tools search to stainless ([6075baa](https://github.com/letta-ai/letta-node/commit/6075baa9541061c70e91558d7a759d591e80b1aa))
* use main branch in sdk repos ([34b461b](https://github.com/letta-ai/letta-node/commit/34b461ba35a28ac29d5fc6af72bcbd3fb39d56c4))

## 1.2.0 (2025-11-25)

Full Changelog: [v1.1.2...v1.2.0](https://github.com/letta-ai/letta-node/compare/v1.1.2...v1.2.0)

### Features

* add search routes ([8c0e374](https://github.com/letta-ai/letta-node/commit/8c0e374c587f0bc327eefc1bd03e4241947ba42a))
* add support for new model ([20d7565](https://github.com/letta-ai/letta-node/commit/20d7565cb016dd5d85434a9918cdf32af4848f9e))


### Bug Fixes

* disable messages + passages for now ([9077911](https://github.com/letta-ai/letta-node/commit/9077911efcc7046a57390baef1c883557e4cb511))
* properly limit runs query ([c4dc26a](https://github.com/letta-ai/letta-node/commit/c4dc26a42fc3715e0dcc4801f3d0217dfa418957))

## 1.1.2 (2025-11-21)

Full Changelog: [v1.1.1...v1.1.2](https://github.com/letta-ai/letta-node/compare/v1.1.1...v1.1.2)

### Bug Fixes

* api key not optional for stainless sdk ([f9fdd65](https://github.com/letta-ai/letta-node/commit/f9fdd65d2ae2e3b6a86e719081bb4d61032cd6fd))

## 1.1.1 (2025-11-21)

Full Changelog: [v1.1.0...v1.1.1](https://github.com/letta-ai/letta-node/compare/v1.1.0...v1.1.1)

### Features

* parallel tool calling in model settings ([146e4ec](https://github.com/letta-ai/letta-node/commit/146e4ec7b5110ca862e026c5e3da3d75c35c16cc))


### Bug Fixes

* create agent for template openapi response schema ([fc5cb3b](https://github.com/letta-ai/letta-node/commit/fc5cb3b6aa286ab022c58563b1ebbb8e51f6d1f5))

## 1.1.0 (2025-11-20)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/letta-ai/letta-node/compare/v1.0.0...v1.1.0)

### Features

* add new letta error message stream response type ([73f7390](https://github.com/letta-ai/letta-node/commit/73f7390b152384fdcba76eacfa22e583295f50a4))
* rename upsert properties endpoint ([1ea2dc2](https://github.com/letta-ai/letta-node/commit/1ea2dc2e7119aaeed1d8c208c09401012d0d1f0f))

## 1.0.0 (2025-11-19)

Full Changelog: [v1.0.0-alpha.22...v1.0.0](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.22...v1.0.0)

### Features

* add client side access tokens to stainless ([9c79dd0](https://github.com/letta-ai/letta-node/commit/9c79dd06df9871369568323bbe30b4cbf2f97727))
* hack at gpt51 [LET-6178] ([1f3743e](https://github.com/letta-ai/letta-node/commit/1f3743e56c0544f4e8e59c1a7219b462a0e2dec7))
* Revert "feat: support anthropic structured outputs [LET-6190]" ([1b7a65a](https://github.com/letta-ai/letta-node/commit/1b7a65a66999dbfbd1d43f1d6592a0278251d299))

## 1.0.0-alpha.22 (2025-11-18)

Full Changelog: [v1.0.0-alpha.21...v1.0.0-alpha.22](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.21...v1.0.0-alpha.22)

### Features

* make config for mcp_servers and messages.modify nested ([3ce1bc2](https://github.com/letta-ai/letta-node/commit/3ce1bc2c17000fbf9de21410675ad00e2fc7e2fb))


### Bug Fixes

* make attach/detach routes return None if sdk verion 1.0 ([95ab434](https://github.com/letta-ai/letta-node/commit/95ab4342ac7e201f9cd7ac85d35503205b76abad))

## 1.0.0-alpha.21 (2025-11-17)

Full Changelog: [v1.0.0-alpha.20...v1.0.0-alpha.21](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.20...v1.0.0-alpha.21)

### Features

* make attach/detach routes return None if version is 1.0 [LET-5844] ([9681272](https://github.com/letta-ai/letta-node/commit/9681272d5d81a5101bec87080b0d9d240f7df6c1))
* move sources to folders ([9b06ed2](https://github.com/letta-ai/letta-node/commit/9b06ed23e766ed01d04a611e5acc6e31150ad8bd))
* rename .af parameters [LET-6154] ([99c0fb6](https://github.com/letta-ai/letta-node/commit/99c0fb6f1eb6ac1b17fa966949c2eeb8c6373cfc))
* Revert "feat: make attach/detach routes return None if version is 1.0 [LET-5844]" ([416e6f2](https://github.com/letta-ai/letta-node/commit/416e6f206f7683d73b7fccf78fd8141342355f21))
* support anthropic structured outputs [LET-6190] ([0a1cef3](https://github.com/letta-ai/letta-node/commit/0a1cef3515b17ed77de519e06c9e498a0ce842ef))


### Chores

* remove mcp-servers connect for stainless [LET-6166] ([fbaa041](https://github.com/letta-ai/letta-node/commit/fbaa041aae7a21d9e3ba0be4516fcacc52c32cbe))
* rename summarize to compact in sdk ([9f58804](https://github.com/letta-ai/letta-node/commit/9f5880448cf253b15ef69e36bac6a29394699e7c))

## 1.0.0-alpha.20 (2025-11-12)

Full Changelog: [v1.0.0-alpha.19...v1.0.0-alpha.20](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.19...v1.0.0-alpha.20)

### Features

* deprecate `EmbeddingConfig` from archives ([30b174c](https://github.com/letta-ai/letta-node/commit/30b174c30bc1364f48de752c7b3fb9bdb4d60503))


### Chores

* rename send to create and modify to update ([d5aec1c](https://github.com/letta-ai/letta-node/commit/d5aec1cdcf8dadf31616939ad6d74e30315ab9b8))
* update stainless send to create ([92380e0](https://github.com/letta-ai/letta-node/commit/92380e02c838231f371e96e701655b4e0b6144f4))

## 1.0.0-alpha.19 (2025-11-12)

Full Changelog: [v1.0.0-alpha.18...v1.0.0-alpha.19](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.18...v1.0.0-alpha.19)

### Features

* add approval return param to stainless ([7ec5ea3](https://github.com/letta-ai/letta-node/commit/7ec5ea3da042bae9d8a20d64ef4d301f778514a7))
* add attach detach methods for archives and identities to sdk ([f644e48](https://github.com/letta-ai/letta-node/commit/f644e487f079e2b136334f0b4e7586d97a978f69))
* add create memory for archive ([8414e07](https://github.com/letta-ai/letta-node/commit/8414e0785a5b4007107c8a38a4b38698ca3bb9f4))
* add model setting params to stainless config ([30e5ba2](https://github.com/letta-ai/letta-node/commit/30e5ba23a93427826406bdf5b3d84e188ac6b4bf))
* add passage deletion route to sdk ([a6656fe](https://github.com/letta-ai/letta-node/commit/a6656fe29a222d9558afb7da80135df9b59c3695))
* bring back model_settings and remove validation again ([916f8ea](https://github.com/letta-ai/letta-node/commit/916f8ea257dad7a4d413f855cc844f99d414bb8a))
* make api key optional in sdk ([2ad9913](https://github.com/letta-ai/letta-node/commit/2ad99135884527fcf1255205d6c6840fb2526084))
* rename message union and internal message ([25bd7a0](https://github.com/letta-ai/letta-node/commit/25bd7a0f12b29988e60dbe5640aff8133f015fef))
* revert model_settings ([6f9e60b](https://github.com/letta-ai/letta-node/commit/6f9e60b6a82e0f7e54a8b100d90a88a3053a45d1))


### Chores

* api sync ([fce4f3a](https://github.com/letta-ai/letta-node/commit/fce4f3af9e6646cc9318cd122c2d1afdc9d16f7e))
* reorder stainless SDK ([7b390be](https://github.com/letta-ai/letta-node/commit/7b390be89c288ea33fdfcfbba6143590e58ebb14))

## 1.0.0-alpha.18 (2025-11-10)

Full Changelog: [v1.0.0-alpha.17...v1.0.0-alpha.18](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.17...v1.0.0-alpha.18)

### Features

* add list support for query params in sdk ([3494a74](https://github.com/letta-ai/letta-node/commit/3494a746d05f9a5c24f912003ffafd667e3cbeca))


### Bug Fixes

* prevent too many runs bug ([d4459ff](https://github.com/letta-ai/letta-node/commit/d4459ff324e183593c9a7a825ed1bd16faa6a903))

## 1.0.0-alpha.17 (2025-11-08)

Full Changelog: [v1.0.0-alpha.16...v1.0.0-alpha.17](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.16...v1.0.0-alpha.17)

### Features

* add model settings schema to stainless [LET-5976] ([6b68312](https://github.com/letta-ai/letta-node/commit/6b683126b6ca4c77fc9ade4479ec582fdab196d8))
* chore; regen ([554c4a9](https://github.com/letta-ai/letta-node/commit/554c4a90b217669caca4801719434cb903b40aae))
* split up handle and `model_settings` ([4f05e2b](https://github.com/letta-ai/letta-node/commit/4f05e2b1c73ac178063547dae9bb7b984bd4c2d2))


### Chores

* add model and embedding models ([81a78a1](https://github.com/letta-ai/letta-node/commit/81a78a13c1967e2db6442af04476aa8972b32ca4))

## 1.0.0-alpha.16 (2025-11-07)

Full Changelog: [v1.0.0-alpha.15...v1.0.0-alpha.16](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.15...v1.0.0-alpha.16)

### Features

* add filters to count_agents endpoint [LET-5380] [LET-5497] ([b46fb82](https://github.com/letta-ai/letta-node/commit/b46fb82c9369d548a328b024e04074d4ed29ece8))
* add last_stop_reason to AgentState [LET-5911] ([b49b54d](https://github.com/letta-ai/letta-node/commit/b49b54de46dedfc859407681790fc02558244792))
* enable streaming flag on send message ([e990b70](https://github.com/letta-ai/letta-node/commit/e990b70a2fe68b969dfc6b8f9f4cdc5f441b36b8))
* filter list agents by stop reason [LET-5928] ([7809961](https://github.com/letta-ai/letta-node/commit/780996166e7f74ef903850072a1e2bd225534096))
* return new Model and EmbeddingModel objects for list model/embedding endpoints [LET-6090] ([137bff3](https://github.com/letta-ai/letta-node/commit/137bff3d038bcf64e1387997c65ea1ed109e5e96))
* Revert "Revert "feat: provider-specific model configuration " ([#5873](https://github.com/letta-ai/letta-node/issues/5873))" ([e63538e](https://github.com/letta-ai/letta-node/commit/e63538e97b275f74f4b5d76f67a60b2163e330e8))


### Bug Fixes

* add mcp server routes typing to stainless.yml ([f9e57a7](https://github.com/letta-ai/letta-node/commit/f9e57a720628e4ad6947471ab07fb03a77e965a8))
* **core:** patch bug w/ sleeptime agents and client-side tool executions [LET-6081] ([2ae116f](https://github.com/letta-ai/letta-node/commit/2ae116f7354534c341b706474da57def3b8c3013))
* fix refresh sdk name stainless ([d66d4a6](https://github.com/letta-ai/letta-node/commit/d66d4a6b3c16b35397202eadac3d6584be2ec8de))
* stainless pagination ([546b50c](https://github.com/letta-ai/letta-node/commit/546b50cc3bba2b09aff4e690ce39473dc3cf7909))


### Chores

* remove count methods from stainless sdk ([a394300](https://github.com/letta-ai/letta-node/commit/a394300fc5c4ca0df19ac5ab6ab7d1f51b9d7335))

## 1.0.0-alpha.15 (2025-11-04)

Full Changelog: [v1.0.0-alpha.14...v1.0.0-alpha.15](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.14...v1.0.0-alpha.15)

### Features

* add `EventMessage` and `SummaryMessage` ([5b88362](https://github.com/letta-ai/letta-node/commit/5b88362e8effeee88910744969968fa048d9772c))
* add input option to send message route [LET-4540] ([0589b69](https://github.com/letta-ai/letta-node/commit/0589b6994cbbe70024cd444f23840ee25b826806))
* make sure tool return chars within max int range ([6092ede](https://github.com/letta-ai/letta-node/commit/6092ede5fb5390f0632d6be2e1da52bc5fd1cc45))

## 1.0.0-alpha.14 (2025-11-04)

Full Changelog: [v1.0.0-alpha.13...v1.0.0-alpha.14](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.13...v1.0.0-alpha.14)

### Features

* add new project id header to stainless client ([f8066b6](https://github.com/letta-ai/letta-node/commit/f8066b6f9d8813bae0ffac391ab4fc4f9fee93bd))


### Bug Fixes

* enable stainless pagination ([ae519f4](https://github.com/letta-ai/letta-node/commit/ae519f482c503f669364d4c7fd2496905dfd0ebc))


### Chores

* update stainless templates route to not pass in project id ([c032587](https://github.com/letta-ai/letta-node/commit/c032587e583ba130b7eda733145554252b3b50b4))

## 1.0.0-alpha.13 (2025-11-03)

Full Changelog: [v1.0.0-alpha.12...v1.0.0-alpha.13](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.12...v1.0.0-alpha.13)

### Features

* add stream return type to all sse endpoints ([c22c792](https://github.com/letta-ai/letta-node/commit/c22c792ab23bad57de9b6b356afb31ef2f075264))

## 1.0.0-alpha.12 (2025-11-01)

Full Changelog: [v1.0.0-alpha.11...v1.0.0-alpha.12](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.11...v1.0.0-alpha.12)

### Features

* add error handle to stainless stream response ([a17dea8](https://github.com/letta-ai/letta-node/commit/a17dea812692f11bfe6ddd5ea87b7f043a83ca0d))

## 1.0.0-alpha.11 (2025-10-31)

Full Changelog: [v1.0.0-alpha.10...v1.0.0-alpha.11](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.10...v1.0.0-alpha.11)

### Features

* add project and project_id fields to stainless client ([3e40365](https://github.com/letta-ai/letta-node/commit/3e403651515619eb67859680b05b204003097389))
* provider-specific model configuration ([8ea03d2](https://github.com/letta-ai/letta-node/commit/8ea03d2e6719a025c065a59b0b361a047880df73))
* Revert "feat: provider-specific model configuration " ([35f2757](https://github.com/letta-ai/letta-node/commit/35f2757b25075b230ab6cece92c177503da7def1))


### Bug Fixes

* stainless merge build dependency on changed files ([0cab2f0](https://github.com/letta-ai/letta-node/commit/0cab2f0087fcb99b68a7c1bb6bc2f815c6ecfcd9))


### Chores

* verify stainless merge build ([6e086a3](https://github.com/letta-ai/letta-node/commit/6e086a3cea7f4152324c34b53201a1df4aff6224))

## 1.0.0-alpha.10 (2025-10-29)

Full Changelog: [v1.0.0-alpha.9...v1.0.0-alpha.10](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.9...v1.0.0-alpha.10)

### Features

* add streaming response type to messages stream for stainless ([56e61ef](https://github.com/letta-ai/letta-node/commit/56e61efde6a6cfe73e8f58fefd46cbec8ecc4769))


### Bug Fixes

* toggle off stainless pagination for list endpoints that require id field ([575af0c](https://github.com/letta-ai/letta-node/commit/575af0c4be8eab72f6fe5334e4e14943b2694153))
* use api base url for cloud ([d4de0a9](https://github.com/letta-ai/letta-node/commit/d4de0a946cbf1bb0736455a04c969c50b028ba36))

## 1.0.0-alpha.9 (2025-10-24)

Full Changelog: [v1.0.0-alpha.8...v1.0.0-alpha.9](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.8...v1.0.0-alpha.9)

### Features

* clean up block return object  [LET-5784] ([9d70a8a](https://github.com/letta-ai/letta-node/commit/9d70a8aaf6ece09236092dbb1faedb9bf4c06ef0))
* deprecate shared_block_ids, and add groups, blocks [LET-4430] ([eae2e06](https://github.com/letta-ai/letta-node/commit/eae2e06ff465987018b459bb5a711f6d6a0b5e08))


### Chores

* rename update methods to modify in stainless ([6e1bd59](https://github.com/letta-ai/letta-node/commit/6e1bd59fd2634fcf3b3c5cfeeb724e95b7541dfa))

## 1.0.0-alpha.8 (2025-10-24)

Full Changelog: [v1.0.0-alpha.7...v1.0.0-alpha.8](https://github.com/letta-ai/letta-node/compare/v1.0.0-alpha.7...v1.0.0-alpha.8)

### Features

* add pagination config for list agent files ([38a2be0](https://github.com/letta-ai/letta-node/commit/38a2be0e97cb498d0a3b0b3d73d2e0f4d1bf9ae4))
* add pagination configuration for list batch message endpoint ([855f60e](https://github.com/letta-ai/letta-node/commit/855f60e1f54880023a9b927b175deb4ccb085b1d))
* add stainless pagination for identities ([ed5e7c7](https://github.com/letta-ai/letta-node/commit/ed5e7c724e42a10bf08a7bf3c66544f62070e4dc))
* make some routes return none for sdk v1 ([2621268](https://github.com/letta-ai/letta-node/commit/2621268acf05b913e687daf567894651d0aac6d4))


### Chores

* add order_by param to list archives [LET-5839] ([33d74a9](https://github.com/letta-ai/letta-node/commit/33d74a948525b99befe5c53bfd539f7555cfed47))

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
