window.BENCHMARK_DATA = {
  "lastUpdate": 1598354819011,
  "repoUrl": "https://github.com/ChihChengLiang/milagro_bls_binding",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "e1fb03d13e0af6d62dfc4141ce4e290b6dac328e",
          "message": "add fancy benchmark workflow",
          "timestamp": "2020-04-26T16:24:31Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/9/commits/e1fb03d13e0af6d62dfc4141ce4e290b6dac328e"
        },
        "date": 1587922887479,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 60.050231045455305,
            "unit": "iter/sec",
            "range": "stddev: 0.00036915098303836686",
            "extra": "mean: 16.652725270000133 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 51.54810033296271,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931373751045924",
            "extra": "mean: 19.399356979999993 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 149.47872531508315,
            "unit": "iter/sec",
            "range": "stddev: 0.000299816428680643",
            "extra": "mean: 6.689915222999929 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chihchengliang@gmail.com",
            "name": "Chih Cheng Liang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "faec28d356284c9a8348f990fa6b2447f1fa1985",
          "message": "Merge pull request #9 from ChihChengLiang/fancy-benchmark\n\nadd fancy benchmark workflow",
          "timestamp": "2020-04-27T11:17:18+08:00",
          "tree_id": "405d3fe22aab79a053d3799b8046ca81c381f092",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/faec28d356284c9a8348f990fa6b2447f1fa1985"
        },
        "date": 1587958104508,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 64.76481396774415,
            "unit": "iter/sec",
            "range": "stddev: 0.001085969329834154",
            "extra": "mean: 15.44048285999935 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 56.419321354695036,
            "unit": "iter/sec",
            "range": "stddev: 0.0005311686658238224",
            "extra": "mean: 17.724424470000884 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 165.07585889746105,
            "unit": "iter/sec",
            "range": "stddev: 0.00026508067802869504",
            "extra": "mean: 6.057820972000286 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "c6354ac13e7b03807e1bde9bf9218dba37d05bb8",
          "message": "fix maturin publish",
          "timestamp": "2020-04-27T03:17:22Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/11/commits/c6354ac13e7b03807e1bde9bf9218dba37d05bb8"
        },
        "date": 1587958321649,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 78.8486940735928,
            "unit": "iter/sec",
            "range": "stddev: 0.0005489928810519166",
            "extra": "mean: 12.682518229999573 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 66.83186755809747,
            "unit": "iter/sec",
            "range": "stddev: 0.0006973563589485121",
            "extra": "mean: 14.962921680000818 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 192.87294884214066,
            "unit": "iter/sec",
            "range": "stddev: 0.00027460974341971754",
            "extra": "mean: 5.184760258000011 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chihchengliang@gmail.com",
            "name": "Chih Cheng Liang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43338e011e509de798f18ef2d89c55224744ad4e",
          "message": "Merge pull request #11 from ChihChengLiang/fix-release-flow\n\nfix maturin publish",
          "timestamp": "2020-04-27T12:01:47+08:00",
          "tree_id": "ccb40e144457bb0b35c4d0454ad45821f9c109ee",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/43338e011e509de798f18ef2d89c55224744ad4e"
        },
        "date": 1587961003632,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 59.12452663832598,
            "unit": "iter/sec",
            "range": "stddev: 0.0014851807158074532",
            "extra": "mean: 16.913454649999267 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 51.60944428760213,
            "unit": "iter/sec",
            "range": "stddev: 0.0014481458722217547",
            "extra": "mean: 19.376298539998515 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 146.35761444858483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006726964073462047",
            "extra": "mean: 6.832579253000176 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "c7533a17265dbd3f635816d65c086d92bece7e38",
          "message": "fix python version",
          "timestamp": "2020-04-27T04:01:51Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/12/commits/c7533a17265dbd3f635816d65c086d92bece7e38"
        },
        "date": 1587962567565,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 69.80568191626539,
            "unit": "iter/sec",
            "range": "stddev: 0.00039194526857458276",
            "extra": "mean: 14.325481430000764 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 56.6204201059238,
            "unit": "iter/sec",
            "range": "stddev: 0.0003850997537893886",
            "extra": "mean: 17.66147263000221 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 165.8240797771787,
            "unit": "iter/sec",
            "range": "stddev: 0.00030837257185886534",
            "extra": "mean: 6.030487256999834 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "2e7bbb6cfc376e0760a5d4800cc4609e4a1218e7",
          "message": "fix python version",
          "timestamp": "2020-04-27T04:01:51Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/12/commits/2e7bbb6cfc376e0760a5d4800cc4609e4a1218e7"
        },
        "date": 1587963644149,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 60.57895581893695,
            "unit": "iter/sec",
            "range": "stddev: 0.00047920062814434626",
            "extra": "mean: 16.507382579998193 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 52.354609944553225,
            "unit": "iter/sec",
            "range": "stddev: 0.0005465782616484988",
            "extra": "mean: 19.10051476000035 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 145.86630800765528,
            "unit": "iter/sec",
            "range": "stddev: 0.0003370506844095879",
            "extra": "mean: 6.855592725000747 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "29c04090a7b3d3127bf198af555e05f8e4f99d37",
          "message": "fix python version",
          "timestamp": "2020-04-27T04:01:51Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/12/commits/29c04090a7b3d3127bf198af555e05f8e4f99d37"
        },
        "date": 1587968710908,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 55.77700451761709,
            "unit": "iter/sec",
            "range": "stddev: 0.00010373582428479277",
            "extra": "mean: 17.928535399998964 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 46.475965623171945,
            "unit": "iter/sec",
            "range": "stddev: 0.00028230174866369304",
            "extra": "mean: 21.516497539997772 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 130.47138898332284,
            "unit": "iter/sec",
            "range": "stddev: 0.00014705513746286362",
            "extra": "mean: 7.6645156289998795 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "8b6be2eda61792992ab1f32f8d130b40ec0a6c40",
          "message": "fix python version",
          "timestamp": "2020-04-27T04:01:51Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/12/commits/8b6be2eda61792992ab1f32f8d130b40ec0a6c40"
        },
        "date": 1587971857070,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 61.47612248037637,
            "unit": "iter/sec",
            "range": "stddev: 0.00040934978168152223",
            "extra": "mean: 16.266478100000654 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 51.94142532846381,
            "unit": "iter/sec",
            "range": "stddev: 0.0004036681018517529",
            "extra": "mean: 19.25245589000042 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 149.0052247217301,
            "unit": "iter/sec",
            "range": "stddev: 0.0002494238226578419",
            "extra": "mean: 6.711174067000115 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chihchengliang@gmail.com",
            "name": "Chih Cheng Liang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5ea453f747766cb0c8c66b3de43ea23774f03ef",
          "message": "Merge pull request #12 from ChihChengLiang/fix-release-2\n\nfix python version",
          "timestamp": "2020-04-27T15:07:30+08:00",
          "tree_id": "90d8c9f1917b4fe01e06923aa39c4191c7a7528b",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/c5ea453f747766cb0c8c66b3de43ea23774f03ef"
        },
        "date": 1587971996967,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 61.05403630893067,
            "unit": "iter/sec",
            "range": "stddev: 0.0006147964756016552",
            "extra": "mean: 16.378933489999667 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 52.99574096653969,
            "unit": "iter/sec",
            "range": "stddev: 0.00041887523526654646",
            "extra": "mean: 18.869440859999997 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 147.5493636267092,
            "unit": "iter/sec",
            "range": "stddev: 0.00025113024074618423",
            "extra": "mean: 6.777392835999876 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "cb9d93a00f5429609adc9c65fd77b2bc9b05089b",
          "message": "upgrade to milagro_bls 1.1.0",
          "timestamp": "2020-04-27T07:07:34Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/13/commits/cb9d93a00f5429609adc9c65fd77b2bc9b05089b"
        },
        "date": 1589958747758,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 58.05791237860643,
            "unit": "iter/sec",
            "range": "stddev: 0.000982392629368663",
            "extra": "mean: 17.22418115000096 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 50.4644296466595,
            "unit": "iter/sec",
            "range": "stddev: 0.0005429398000704622",
            "extra": "mean: 19.815937820000613 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 132.2385762326232,
            "unit": "iter/sec",
            "range": "stddev: 0.0004171897709624605",
            "extra": "mean: 7.562089887000013 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chihchengliang@gmail.com",
            "name": "Chih Cheng Liang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8a6ab31d1ed0d503151b1e195b89e83b2771501",
          "message": "Merge pull request #13 from ChihChengLiang/upgrade-to-milagro_bls-1.1.0\n\nupgrade to milagro_bls 1.1.0",
          "timestamp": "2020-05-20T15:47:32+08:00",
          "tree_id": "01c298eed31d7228d418fb62766ab84f1f9fdd35",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/f8a6ab31d1ed0d503151b1e195b89e83b2771501"
        },
        "date": 1589961527025,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 52.88990795565152,
            "unit": "iter/sec",
            "range": "stddev: 0.000558659231798829",
            "extra": "mean: 18.90719871999977 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 45.98207859246769,
            "unit": "iter/sec",
            "range": "stddev: 0.0004699504082375746",
            "extra": "mean: 21.74760320999951 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 121.5494153589644,
            "unit": "iter/sec",
            "range": "stddev: 0.0002593932529971159",
            "extra": "mean: 8.227106622000292 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "0f055707b70fbedda80b746c1c8ff13f74527120",
          "message": "Change api",
          "timestamp": "2020-05-20T07:47:36Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/14/commits/0f055707b70fbedda80b746c1c8ff13f74527120"
        },
        "date": 1589986632395,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 65.6872364704016,
            "unit": "iter/sec",
            "range": "stddev: 0.000661420760203334",
            "extra": "mean: 15.22365765000018 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 48.86843420431019,
            "unit": "iter/sec",
            "range": "stddev: 0.0022018105807010435",
            "extra": "mean: 20.463107040000068 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 137.1230195383762,
            "unit": "iter/sec",
            "range": "stddev: 0.0008838701302604354",
            "extra": "mean: 7.2927215530003195 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chihchengliang@gmail.com",
            "name": "Chih Cheng Liang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fa6dcdf61d7b322ec4ace4fb057b7b1e08790d8",
          "message": "Merge pull request #14 from ChihChengLiang/change-api\n\nChange api",
          "timestamp": "2020-05-20T23:54:18+08:00",
          "tree_id": "46b4a68add8cea504b72c0e4a0c47629e9d75bf7",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/2fa6dcdf61d7b322ec4ace4fb057b7b1e08790d8"
        },
        "date": 1589990665198,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 56.01770498272734,
            "unit": "iter/sec",
            "range": "stddev: 0.00024353662258609862",
            "extra": "mean: 17.851498919999358 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 47.634088808440694,
            "unit": "iter/sec",
            "range": "stddev: 0.0003375489045317898",
            "extra": "mean: 20.99336893000043 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 129.4878067784086,
            "unit": "iter/sec",
            "range": "stddev: 0.00021635497225017984",
            "extra": "mean: 7.722734865000007 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "7d7295234023d7e4bd127fc91e35e27d44b10a76",
          "message": "Bump version 1.2",
          "timestamp": "2020-05-20T15:54:22Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/15/commits/7d7295234023d7e4bd127fc91e35e27d44b10a76"
        },
        "date": 1589991783684,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 56.344203049266774,
            "unit": "iter/sec",
            "range": "stddev: 0.0005234699116509198",
            "extra": "mean: 17.748054739998906 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 48.148703279511516,
            "unit": "iter/sec",
            "range": "stddev: 0.0005131836703140389",
            "extra": "mean: 20.768991310001184 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 125.9434205641517,
            "unit": "iter/sec",
            "range": "stddev: 0.0003800071969609812",
            "extra": "mean: 7.940073371999858 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chihchengliang@gmail.com",
            "name": "Chih Cheng Liang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fbf9f4bddfc762ac1b99a5e83ba53eddc3ce80a5",
          "message": "Merge pull request #15 from ChihChengLiang/bump-version-1.2\n\nBump version 1.2",
          "timestamp": "2020-05-21T00:47:21+08:00",
          "tree_id": "f01ea7bdae544b1f9907124f55eb37bbab0e3e02",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/fbf9f4bddfc762ac1b99a5e83ba53eddc3ce80a5"
        },
        "date": 1589993908715,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 58.117445523934386,
            "unit": "iter/sec",
            "range": "stddev: 0.0005226803236651161",
            "extra": "mean: 17.20653739999932 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 49.79430460750754,
            "unit": "iter/sec",
            "range": "stddev: 0.0006466119068716064",
            "extra": "mean: 20.082618040000284 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 132.57366582946491,
            "unit": "iter/sec",
            "range": "stddev: 0.0002850675504479636",
            "extra": "mean: 7.542976153999859 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "7c93b394969dacb7dc6e5c60813fe81d2ea9972a",
          "message": "Remove all unwrap and make sure errors are properly handled",
          "timestamp": "2020-05-20T16:47:25Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/16/commits/7c93b394969dacb7dc6e5c60813fe81d2ea9972a"
        },
        "date": 1590003974206,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 66.61154374909219,
            "unit": "iter/sec",
            "range": "stddev: 0.0004169597726093242",
            "extra": "mean: 15.012412919999747 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 56.39423215403379,
            "unit": "iter/sec",
            "range": "stddev: 0.0007574650574479454",
            "extra": "mean: 17.73230988000023 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 158.1634225334777,
            "unit": "iter/sec",
            "range": "stddev: 0.00040914010354528113",
            "extra": "mean: 6.322574359999919 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "2f4efabc2f21442a82ddc8a0abc39a9225d05a92",
          "message": "Remove all unwrap and make sure errors are properly handled",
          "timestamp": "2020-05-20T16:47:25Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/16/commits/2f4efabc2f21442a82ddc8a0abc39a9225d05a92"
        },
        "date": 1590005302721,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 51.66210955198329,
            "unit": "iter/sec",
            "range": "stddev: 0.00105513845746933",
            "extra": "mean: 19.356545999999923 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 46.44087022988724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858337560849862",
            "extra": "mean: 21.53275757000017 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 119.0278395255353,
            "unit": "iter/sec",
            "range": "stddev: 0.0005208241562945034",
            "extra": "mean: 8.401395875000048 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chihchengliang@gmail.com",
            "name": "Chih Cheng Liang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f90778cc242c5476856bada6fad61635c908ab93",
          "message": "Merge pull request #16 from ChihChengLiang/nit-fixes\n\nRemove all unwrap and make sure errors are properly handled",
          "timestamp": "2020-05-21T04:09:52+08:00",
          "tree_id": "c3381171ecbc76cb8b86c1e23224da649838c113",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/f90778cc242c5476856bada6fad61635c908ab93"
        },
        "date": 1590005804397,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 63.414813820620026,
            "unit": "iter/sec",
            "range": "stddev: 0.0004860944873189039",
            "extra": "mean: 15.76918608999904 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 51.60009340607345,
            "unit": "iter/sec",
            "range": "stddev: 0.0010484480226192433",
            "extra": "mean: 19.379809880001062 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 134.51326882338128,
            "unit": "iter/sec",
            "range": "stddev: 0.0002971485393335194",
            "extra": "mean: 7.43421083100003 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "committer": {
            "name": "ChihChengLiang",
            "username": "ChihChengLiang"
          },
          "id": "36d56e0b2369d06c06499675b6d2ec5629fd45d6",
          "message": "Expose pairing function",
          "timestamp": "2020-05-26T17:29:24Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/17/commits/36d56e0b2369d06c06499675b6d2ec5629fd45d6"
        },
        "date": 1598354818591,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 65.10889113057864,
            "unit": "iter/sec",
            "range": "stddev: 0.00043724581181345235",
            "extra": "mean: 15.358885440000163 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 50.032734291655956,
            "unit": "iter/sec",
            "range": "stddev: 0.00025632159350551774",
            "extra": "mean: 19.98691484999995 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 131.65635167150552,
            "unit": "iter/sec",
            "range": "stddev: 0.00021644165944430949",
            "extra": "mean: 7.595531755999815 msec\nrounds: 100"
          },
          {
            "name": "benchmark.py::test_pairing_py_ecc_no_final_exp",
            "value": 8.688568237656396,
            "unit": "iter/sec",
            "range": "stddev: 0.0011246195915695578",
            "extra": "mean: 115.09376144000157 msec\nrounds: 5"
          },
          {
            "name": "benchmark.py::test_pairing_binding_no_final_exp",
            "value": 311.0154658380726,
            "unit": "iter/sec",
            "range": "stddev: 0.00010420872548925204",
            "extra": "mean: 3.215274190000059 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_pairing_py_ecc",
            "value": 1.15426662419638,
            "unit": "iter/sec",
            "range": "stddev: 0.016388466386646153",
            "extra": "mean: 866.3509617599983 msec\nrounds: 5"
          },
          {
            "name": "benchmark.py::test_pairing_binding",
            "value": 222.41080582722083,
            "unit": "iter/sec",
            "range": "stddev: 0.00013086371359440725",
            "extra": "mean: 4.49618442000002 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}