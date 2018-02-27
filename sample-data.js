module.exports = {
  "@context": "https://w3id.org/webledger/v1",
  "id": "did:v1:eb8c22dc-bde6-4315-92e2-59bd3f3c7d59/blocks/3",
  "blockHeight": 3,
  "consensusMethod": "Continuity2017",
  "type": "WebLedgerEventBlock",
  "previousBlock": "did:v1:eb8c22dc-bde6-4315-92e2-59bd3f3c7d59/blocks/2",
  "previousBlockHash": "ni:///sha-256;AxxSdyRkGnyRk2wQlUT8-Lu0l4CwYlCVDbExO6jDx6I",
  "publicKey": [
    {
      "id": "https://bedrock.local:18443/consensus/continuity2017/voters/88G1F68HGhnMzNFjC7b2QZWa6Xf5tDqtSWuRnrio3vua",
      "seeAlso": "did:v1:eb8c22dc-bde6-4315-92e2-59bd3f3c7d59/blocks/0"
    }
  ],
  "event": [
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": "WebLedgerOperationEvent",
      "operation": [
        {
          "@context": "https://w3id.org/webledger/v1",
          "type": "CreateWebLedgerRecord",
          "record": {
            "@context": "https://w3id.org/test/v1",
            "id": "https://example.com/event/8432142c-e1f1-4ce8-b499-cb58f996d84d",
            "type": "Concert",
            "name": "Big Band Concert in New York City",
            "startDate": "2017-07-14T21:30",
            "location": "https://example.org/the-venue",
            "offers": {
              "type": "Offer",
              "price": "13.00",
              "priceCurrency": "USD",
              "url": "https://www.ticketfly.com/purchase/309433"
            }
          }
        }
      ],
      "treeHash": "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
      "parentHash": [
        "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo"
      ]
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": "WebLedgerOperationEvent",
      "operation": [
        {
          "@context": "https://w3id.org/webledger/v1",
          "type": "CreateWebLedgerRecord",
          "record": {
            "@context": "https://w3id.org/test/v1",
            "id": "https://example.com/event/94c25ab0-52e2-458b-b788-1f3cf70ebb1d",
            "type": "Concert",
            "name": "Big Band Concert in New York City",
            "startDate": "2017-07-14T21:30",
            "location": "https://example.org/the-venue",
            "offers": {
              "type": "Offer",
              "price": "13.00",
              "priceCurrency": "USD",
              "url": "https://www.ticketfly.com/purchase/309433"
            }
          }
        }
      ],
      "treeHash": "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
      "parentHash": [
        "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo"
      ]
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
        "ni:///sha-256;qCnPshjOu8yBZrj0YrUih89CoYbQDHfRotB5GtVbq9w"
      ],
      "treeHash": "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:24Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/HxNCm33e2cXcB1aXF3iBRHw9Re4rcRocqSFj7Jbhfa6x",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..9jv_B7zSXK4L52JJEfrchaDRdgj0AdhyMn6lLebWTHLHRIiF6wyT_MN073WfozvbXXLlODvnEc5o6LBsXWpnCA"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": "WebLedgerOperationEvent",
      "operation": [
        {
          "@context": "https://w3id.org/webledger/v1",
          "type": "CreateWebLedgerRecord",
          "record": {
            "@context": "https://w3id.org/test/v1",
            "id": "https://example.com/event/b317e185-2117-4985-b87d-4c4bcdc3b3c0",
            "type": "Concert",
            "name": "Big Band Concert in New York City",
            "startDate": "2017-07-14T21:30",
            "location": "https://example.org/the-venue",
            "offers": {
              "type": "Offer",
              "price": "13.00",
              "priceCurrency": "USD",
              "url": "https://www.ticketfly.com/purchase/309433"
            }
          }
        }
      ],
      "treeHash": "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
      "parentHash": [
        "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo"
      ]
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
        "ni:///sha-256;hjih55gpuGb81VG2Rh07yC9qvl21M-lCeFYyxy5jND8"
      ],
      "treeHash": "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:23Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/972AigXDH1SWUL1syoqppgBFpUJrmZGXf6JBbKo6xuxr",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..-umkXlXX8bu_1DabQ0PJDFHrCK25Z4D5kWhbgxmxoBsJtCj3I0f2GQLpR4g1-c2cKILWufhztvsBxDLD3QV1DQ"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;mQEx3A6JupuZkUjs-3BaGuppn5HtitdqE-5KJFnLo4w",
        "ni:///sha-256;qCnPshjOu8yBZrj0YrUih89CoYbQDHfRotB5GtVbq9w"
      ],
      "treeHash": "ni:///sha-256;mQEx3A6JupuZkUjs-3BaGuppn5HtitdqE-5KJFnLo4w",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:24Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/972AigXDH1SWUL1syoqppgBFpUJrmZGXf6JBbKo6xuxr",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..GkqaHZRuYymn22lVVEAMiiH6aMMX2OeMETx1RRDudTMAA6bCGLBZDIhl-0MPV9IIRv433oL6Wx2bgmJdFdQ6Dg"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;eB086x7DrNY5tQ3NKku5M9TxIqjBGhSlyg357xyCsAM",
        "ni:///sha-256;rBABRySWHhJfoyOyopx7zagDkXWscCv2OGa20cesgEE"
      ],
      "treeHash": "ni:///sha-256;eB086x7DrNY5tQ3NKku5M9TxIqjBGhSlyg357xyCsAM",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:25Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/972AigXDH1SWUL1syoqppgBFpUJrmZGXf6JBbKo6xuxr",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..d9jtrXgYslJjKqPT2pKwwt2IwyJi1kl5s8pctT669j3z-uXp9ZK8QA7OvfVZmgsFozGR3mfUMr1tK8_tiEd6CQ"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;Um0mxJaDLcRK4z-ZJnydYRrveqf-r2vwkKCVQ9btRUQ",
        "ni:///sha-256;qCnPshjOu8yBZrj0YrUih89CoYbQDHfRotB5GtVbq9w"
      ],
      "treeHash": "ni:///sha-256;Um0mxJaDLcRK4z-ZJnydYRrveqf-r2vwkKCVQ9btRUQ",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:24Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/C59iMgk5mLqCorJkqXpF3dqpUJnmyGVKmhRiJw7qWfpb",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..illiwI4Qh2D6HJWE8kk-9cLPCZo8cTbKVR0_H5egfYTiZTXOuczlyhTtTqcbP4I1RQFV0wGX8KpzSY0M-5LmBw"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;J_DyjmWYOSdl0HmoqarlL_geA-fSW6x003LnJVEf4T4",
        "ni:///sha-256;e0LRGAhlxubzPuBHl6-ye4Ng97wR2TBkQu5K6_zeZ-I"
      ],
      "treeHash": "ni:///sha-256;J_DyjmWYOSdl0HmoqarlL_geA-fSW6x003LnJVEf4T4",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:25Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/C59iMgk5mLqCorJkqXpF3dqpUJnmyGVKmhRiJw7qWfpb",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19.._sjNJeaEU5obsEy2XB0i47Tl6jc7RGRRFhcrDkMCcbKLUMU8AtNd8HxnhrfeJb9IEwfIuv7CU5SwcKMeVZq_Ag"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": "WebLedgerOperationEvent",
      "operation": [
        {
          "@context": "https://w3id.org/webledger/v1",
          "type": "CreateWebLedgerRecord",
          "record": {
            "@context": "https://w3id.org/test/v1",
            "id": "https://example.com/event/a72ddc8d-503e-4516-bee1-a511c949f06e",
            "type": "Concert",
            "name": "Big Band Concert in New York City",
            "startDate": "2017-07-14T21:30",
            "location": "https://example.org/the-venue",
            "offers": {
              "type": "Offer",
              "price": "13.00",
              "priceCurrency": "USD",
              "url": "https://www.ticketfly.com/purchase/309433"
            }
          }
        }
      ],
      "treeHash": "ni:///sha-256;eB086x7DrNY5tQ3NKku5M9TxIqjBGhSlyg357xyCsAM",
      "parentHash": [
        "ni:///sha-256;eB086x7DrNY5tQ3NKku5M9TxIqjBGhSlyg357xyCsAM"
      ]
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
        "ni:///sha-256;QDgRd-9GeyOafsMprURSqiY9lFFUOFPd8FboFgrrfEM"
      ],
      "treeHash": "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:23Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/3x96JCTdxGfXJeNBdgTHmL7CLmmVr1FHPRSb4sqE7Cgr",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..DaRk1aa0YbyW2nuHgrwg2CUdgeS11EhUiqnnj4Be41YqY_TH5C6wDDAB6AKYt9OBUaaffAZfcihbo4bBIL9sDg"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": "WebLedgerOperationEvent",
      "operation": [
        {
          "@context": "https://w3id.org/webledger/v1",
          "type": "CreateWebLedgerRecord",
          "record": {
            "@context": "https://w3id.org/test/v1",
            "id": "https://example.com/event/c83ef5dd-fc03-4f11-88b6-c7b99fe26069",
            "type": "Concert",
            "name": "Big Band Concert in New York City",
            "startDate": "2017-07-14T21:30",
            "location": "https://example.org/the-venue",
            "offers": {
              "type": "Offer",
              "price": "13.00",
              "priceCurrency": "USD",
              "url": "https://www.ticketfly.com/purchase/309433"
            }
          }
        }
      ],
      "treeHash": "ni:///sha-256;FwA1cqYXW7Sw2PUNU6VxZY_8cF0lCIMluoaffLL6s3A",
      "parentHash": [
        "ni:///sha-256;FwA1cqYXW7Sw2PUNU6VxZY_8cF0lCIMluoaffLL6s3A"
      ]
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": "WebLedgerOperationEvent",
      "operation": [
        {
          "@context": "https://w3id.org/webledger/v1",
          "type": "CreateWebLedgerRecord",
          "record": {
            "@context": "https://w3id.org/test/v1",
            "id": "https://example.com/event/357bf625-f657-4b9d-bb2a-bf3b17c5931b",
            "type": "Concert",
            "name": "Big Band Concert in New York City",
            "startDate": "2017-07-14T21:30",
            "location": "https://example.org/the-venue",
            "offers": {
              "type": "Offer",
              "price": "13.00",
              "priceCurrency": "USD",
              "url": "https://www.ticketfly.com/purchase/309433"
            }
          }
        }
      ],
      "treeHash": "ni:///sha-256;J_DyjmWYOSdl0HmoqarlL_geA-fSW6x003LnJVEf4T4",
      "parentHash": [
        "ni:///sha-256;J_DyjmWYOSdl0HmoqarlL_geA-fSW6x003LnJVEf4T4"
      ]
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;JHAUr06TXCOQ1V9RizcZSYDoUgoJv4VJBwm2UtT1PTY",
        "ni:///sha-256;qCnPshjOu8yBZrj0YrUih89CoYbQDHfRotB5GtVbq9w"
      ],
      "treeHash": "ni:///sha-256;JHAUr06TXCOQ1V9RizcZSYDoUgoJv4VJBwm2UtT1PTY",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:24Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/3x96JCTdxGfXJeNBdgTHmL7CLmmVr1FHPRSb4sqE7Cgr",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..urTuYnAdfUYI_2FtdF1Cya7090axAHSHvQJPY-thACc7hXOOyuk5YeqER2nASDLvMFxXYXtSTZvYQalXicaWDA"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;FwA1cqYXW7Sw2PUNU6VxZY_8cF0lCIMluoaffLL6s3A",
        "ni:///sha-256;usfXRp7Ylax-VQ84QYTauqFjcHFEHqgw2ltDQPTQcmA"
      ],
      "treeHash": "ni:///sha-256;FwA1cqYXW7Sw2PUNU6VxZY_8cF0lCIMluoaffLL6s3A",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:25Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/3x96JCTdxGfXJeNBdgTHmL7CLmmVr1FHPRSb4sqE7Cgr",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..DdQEBKPk6luMKOyAyxJfwyCeo1I3k48LT5C1uVkrusnQSSdzuikITRLz7tSMJdy3cbaukW02hYxc3szzySOPBg"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
        "ni:///sha-256;qCnPshjOu8yBZrj0YrUih89CoYbQDHfRotB5GtVbq9w"
      ],
      "treeHash": "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:24Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/7Ro6PVC5isEgwmCaGV9PxYXXTU89rPN5FDm3oeJta7v8",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..EXNq3qQOP0ylHDrE7T0dq6lH2vN2ywc89BLoWgaSMQFlPzpZrQC_5c2CiijM6cKTQX2JAZEl-DK3jR6TJkQvBg"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
        "ni:///sha-256;zpMBMV1UN_s4OMlQmWe81vW6YG1K59ehj-6G37naqoU"
      ],
      "treeHash": "ni:///sha-256;q5SPWZ4DezuP-FbBpCDhckpbvTiVXAcvCKeGWzbz3Qo",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:23Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/C59iMgk5mLqCorJkqXpF3dqpUJnmyGVKmhRiJw7qWfpb",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Bz-hjYBm2aV2A4TmUg6xWTl9tigCLYktcpwoTggAJN4mQBvSZRAnzGwiNClVnVFI7JoAMcLiYn0dD91uLmT6BA"
      }
    },
    {
      "@context": "https://w3id.org/webledger/v1",
      "type": [
        "WebLedgerEvent",
        "ContinuityMergeEvent"
      ],
      "parentHash": [
        "ni:///sha-256;8mHik8CXH06UPzdL7X5fmVOoFdivnf_ARobizqbA_RM",
        "ni:///sha-256;_EU79e2sTapbxV9o0WKxUAmc4syNJ9bwhBAw_xh8Gdw",
        "ni:///sha-256;-7VdbEL_J1XrL-2DXRH94FXVN0nT-Yv_imOmLcv3Uhs",
        "ni:///sha-256;dIDtC_IO66DsXiT40h0im6Owy1a4x-2gBP6IvC4Ic98",
        "ni:///sha-256;cwyITSgF_6gvFWkrimEqH2rkdZpikVi6RSkhdZCH_-Q",
        "ni:///sha-256;F0aAlo6mV7coGu3rNdnajAUlxc0K0vK3ALxiumLO4h8"
      ],
      "treeHash": "ni:///sha-256;8mHik8CXH06UPzdL7X5fmVOoFdivnf_ARobizqbA_RM",
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2018-02-19T00:21:26Z",
        "creator": "https://bedrock.local:18443/consensus/continuity2017/voters/88G1F68HGhnMzNFjC7b2QZWa6Xf5tDqtSWuRnrio3vua",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..cDCxFmHTz3MzPSBiPgRIy794ABvjXZ-7u8Y9p9KDrD-U4b7Xytn7OLDQ33JajYD5NB34lR2O1633LK0imggCDQ"
      }
    }
  ],
};
