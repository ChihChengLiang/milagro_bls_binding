window.BENCHMARK_DATA = {
  "lastUpdate": 1628132082148,
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
          "id": "29cb5ac52c5a4cea200fa794d37b5d8bdd732c55",
          "message": "upgrades to BLS v4",
          "timestamp": "2020-05-26T17:29:24Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/18/commits/29cb5ac52c5a4cea200fa794d37b5d8bdd732c55"
        },
        "date": 1601611542458,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 53.341106739929856,
            "unit": "iter/sec",
            "range": "stddev: 0.000474457507827251",
            "extra": "mean: 18.747267560000296 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 45.744178107461046,
            "unit": "iter/sec",
            "range": "stddev: 0.00028515330456239165",
            "extra": "mean: 21.860705369999778 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 118.13465481640809,
            "unit": "iter/sec",
            "range": "stddev: 0.00016416771615648996",
            "extra": "mean: 8.46491659499992 msec\nrounds: 100"
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
          "id": "1e3864bb71e2d5404112239917fea1579147a5a5",
          "message": "Merge pull request #18 from ChihChengLiang/upgrade-to-milagro-bls-v1.2.0\n\nupgrades to BLS v4",
          "timestamp": "2020-10-02T12:38:40+08:00",
          "tree_id": "e3999577668038558351d56e378bbb25aaec8b17",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/1e3864bb71e2d5404112239917fea1579147a5a5"
        },
        "date": 1601614135178,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 54.9142346024368,
            "unit": "iter/sec",
            "range": "stddev: 0.00017195810549468994",
            "extra": "mean: 18.210214660000474 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 46.98930454495345,
            "unit": "iter/sec",
            "range": "stddev: 0.000056989876206217803",
            "extra": "mean: 21.281438609999555 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 121.00414824376226,
            "unit": "iter/sec",
            "range": "stddev: 0.00012277713896662474",
            "extra": "mean: 8.264179488999872 msec\nrounds: 100"
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
          "id": "b4a86e57d86f762b85d7beb48f3da5aca104d2a4",
          "message": "Fix more bls v4 issue",
          "timestamp": "2020-10-02T04:38:43Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/20/commits/b4a86e57d86f762b85d7beb48f3da5aca104d2a4"
        },
        "date": 1601921450334,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 61.577529392514904,
            "unit": "iter/sec",
            "range": "stddev: 0.0008651963669016046",
            "extra": "mean: 16.23969018999901 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 55.40736388200644,
            "unit": "iter/sec",
            "range": "stddev: 0.000743610219789255",
            "extra": "mean: 18.04814252000085 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 150.53305665627212,
            "unit": "iter/sec",
            "range": "stddev: 0.0003733404897219824",
            "extra": "mean: 6.643059153999673 msec\nrounds: 100"
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
          "id": "1cfd96941083dc43ce10813b0f833a219abb8d1e",
          "message": "Bump Milagro BLS to v1.3.0",
          "timestamp": "2020-10-02T04:38:43Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/21/commits/1cfd96941083dc43ce10813b0f833a219abb8d1e"
        },
        "date": 1601965110338,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 58.460412737033145,
            "unit": "iter/sec",
            "range": "stddev: 0.00022246014096513101",
            "extra": "mean: 17.105592540001453 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 50.20614810090374,
            "unit": "iter/sec",
            "range": "stddev: 0.000012049142471780404",
            "extra": "mean: 19.91787934000058 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 132.3097615025021,
            "unit": "iter/sec",
            "range": "stddev: 0.000004939088919094001",
            "extra": "mean: 7.558021332999601 msec\nrounds: 100"
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
          "id": "e0a71d5ffe29f658633d2d6a361e1065635d40a1",
          "message": "Merge pull request #21 from ChihChengLiang/bump-upstream-to-v1.3.0\n\nBump Milagro BLS to v1.3.0",
          "timestamp": "2020-10-06T14:25:43+08:00",
          "tree_id": "c6f50e61d4737bb606235838b892c76d4c8dc363",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/e0a71d5ffe29f658633d2d6a361e1065635d40a1"
        },
        "date": 1601965940257,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 59.135350847278985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005562616498999638",
            "extra": "mean: 16.91035878999969 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 49.27413248076801,
            "unit": "iter/sec",
            "range": "stddev: 0.0005638956147796526",
            "extra": "mean: 20.294624170000475 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 132.45270408181082,
            "unit": "iter/sec",
            "range": "stddev: 0.0002940957591672052",
            "extra": "mean: 7.549864737999911 msec\nrounds: 100"
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
          "id": "2b52a9be7b2f05c579152e32d2c9d865291bb7b6",
          "message": "release 1.5.1",
          "timestamp": "2020-11-10T13:58:07Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/23/commits/2b52a9be7b2f05c579152e32d2c9d865291bb7b6"
        },
        "date": 1608319101100,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 70.39865876249964,
            "unit": "iter/sec",
            "range": "stddev: 0.000009442433825816385",
            "extra": "mean: 14.204816080000171 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 60.16701073402414,
            "unit": "iter/sec",
            "range": "stddev: 0.000012237786065117022",
            "extra": "mean: 16.620403569999947 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 158.37069749311587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025146382596569393",
            "extra": "mean: 6.314299399000049 msec\nrounds: 100"
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
          "id": "4651a72e06ed604c9107668cc65ca99fbeb51dba",
          "message": "release 1.5.1",
          "timestamp": "2020-11-10T13:58:07Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/23/commits/4651a72e06ed604c9107668cc65ca99fbeb51dba"
        },
        "date": 1608319506815,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 70.32410582892402,
            "unit": "iter/sec",
            "range": "stddev: 0.00003471248734512016",
            "extra": "mean: 14.219875080000008 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 60.20878933024475,
            "unit": "iter/sec",
            "range": "stddev: 0.000004179810112978912",
            "extra": "mean: 16.608870749999767 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 157.85274327680563,
            "unit": "iter/sec",
            "range": "stddev: 0.00003574287390981397",
            "extra": "mean: 6.335018190000227 msec\nrounds: 100"
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
          "id": "963f9941092e514a18b61a4ac8bf786bfc38f4af",
          "message": "release 1.5.1",
          "timestamp": "2020-11-10T13:58:07Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/23/commits/963f9941092e514a18b61a4ac8bf786bfc38f4af"
        },
        "date": 1608319539947,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 60.11211971907817,
            "unit": "iter/sec",
            "range": "stddev: 0.0003633730026412139",
            "extra": "mean: 16.635580389999518 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 52.14545927055443,
            "unit": "iter/sec",
            "range": "stddev: 0.00028305595332833895",
            "extra": "mean: 19.177125179999734 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 136.4592574342787,
            "unit": "iter/sec",
            "range": "stddev: 0.00013084874515264917",
            "extra": "mean: 7.328194648000476 msec\nrounds: 100"
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
          "id": "d3310c2bf9ace74597a6dedeb5bbb3b6f54039bd",
          "message": "Merge pull request #23 from ChihChengLiang/release-1.5.1\n\nrelease 1.5.1",
          "timestamp": "2020-12-19T03:31:04+08:00",
          "tree_id": "d50037eba81a53c3ebcfe71ced4a1247ba84cd25",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/d3310c2bf9ace74597a6dedeb5bbb3b6f54039bd"
        },
        "date": 1608320394290,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 70.37992269580654,
            "unit": "iter/sec",
            "range": "stddev: 0.000011277325378479034",
            "extra": "mean: 14.20859758999967 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 60.073666294473156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034272902598407434",
            "extra": "mean: 16.646228899999755 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 158.24347955242237,
            "unit": "iter/sec",
            "range": "stddev: 0.000004717228588503769",
            "extra": "mean: 6.319375704000009 msec\nrounds: 100"
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
          "id": "73fb7b2bde69fa1354956cdc1a88876af122b598",
          "message": "Upgrade upstram to 1.4.1",
          "timestamp": "2020-12-18T19:31:07Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/24/commits/73fb7b2bde69fa1354956cdc1a88876af122b598"
        },
        "date": 1608371186010,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 22.95990243790112,
            "unit": "iter/sec",
            "range": "stddev: 0.000024515509798065763",
            "extra": "mean: 43.55419203999958 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 21.750307752445057,
            "unit": "iter/sec",
            "range": "stddev: 0.000016828874879969152",
            "extra": "mean: 45.97636095000013 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 157.56277344065762,
            "unit": "iter/sec",
            "range": "stddev: 0.00000318039711817421",
            "extra": "mean: 6.346676808000126 msec\nrounds: 100"
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
          "id": "6f5a4ce90167dd3182d91185e5f4fab07724da46",
          "message": "Upgrade upstram to 1.4.1",
          "timestamp": "2020-12-18T19:31:07Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/24/commits/6f5a4ce90167dd3182d91185e5f4fab07724da46"
        },
        "date": 1608391966633,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 20.93254302944166,
            "unit": "iter/sec",
            "range": "stddev: 0.002699677287275672",
            "extra": "mean: 47.772504209999624 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 19.535806894843965,
            "unit": "iter/sec",
            "range": "stddev: 0.0025652264909710814",
            "extra": "mean: 51.188057160000255 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 143.84449289481356,
            "unit": "iter/sec",
            "range": "stddev: 0.00046400739217155305",
            "extra": "mean: 6.951951930000206 msec\nrounds: 100"
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
          "id": "8d70f351e493383ce1c028b3bb8537f44c23b19f",
          "message": "Merge pull request #24 from ChihChengLiang/ugrade-upstram-to-1.4.1\n\nUpgrade upstram to 1.4.1",
          "timestamp": "2020-12-20T00:09:09+08:00",
          "tree_id": "3b72b6301fb30ce1db6a45677b182b4696293b2c",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/8d70f351e493383ce1c028b3bb8537f44c23b19f"
        },
        "date": 1608394617277,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 17.50370280461892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007679427997727449",
            "extra": "mean: 57.13076890999986 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 16.404447659612018,
            "unit": "iter/sec",
            "range": "stddev: 0.000830650333734532",
            "extra": "mean: 60.95907772999964 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 120.88847093414262,
            "unit": "iter/sec",
            "range": "stddev: 0.00025793365403296875",
            "extra": "mean: 8.272087422999817 msec\nrounds: 100"
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
          "id": "d7528d4d14898ac4a530eab85165780ca57aba39",
          "message": "Support 3.9 and windows",
          "timestamp": "2020-12-19T16:09:13Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/26/commits/d7528d4d14898ac4a530eab85165780ca57aba39"
        },
        "date": 1608395210342,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 17.526928805016688,
            "unit": "iter/sec",
            "range": "stddev: 0.0008996240827448965",
            "extra": "mean: 57.05506144999987 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 16.702099577996737,
            "unit": "iter/sec",
            "range": "stddev: 0.0009984216243328103",
            "extra": "mean: 59.87271213000042 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 122.30983600848072,
            "unit": "iter/sec",
            "range": "stddev: 0.00020967218189653448",
            "extra": "mean: 8.175957327999868 msec\nrounds: 100"
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
          "id": "38031b5a65d4efdea661b5a513e1cdb71dd375b2",
          "message": "Support 3.9 and windows",
          "timestamp": "2020-12-19T16:09:13Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/26/commits/38031b5a65d4efdea661b5a513e1cdb71dd375b2"
        },
        "date": 1608396387267,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 23.042918988787765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032845074040739767",
            "extra": "mean: 43.39727967999977 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 21.804943623011045,
            "unit": "iter/sec",
            "range": "stddev: 0.00010461268914592409",
            "extra": "mean: 45.86115961999951 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 158.28900902077777,
            "unit": "iter/sec",
            "range": "stddev: 0.000006914268766094282",
            "extra": "mean: 6.317558030000271 msec\nrounds: 100"
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
          "id": "e3238c976deeca7c5bb71c3293a0b504d9724d69",
          "message": "Merge pull request #26 from ChihChengLiang/support-3.9-and-windows\n\nSupport 3.9 and windows",
          "timestamp": "2020-12-20T01:41:52+08:00",
          "tree_id": "4ecddef20933a5106158090a668262326723f49e",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/e3238c976deeca7c5bb71c3293a0b504d9724d69"
        },
        "date": 1608399909565,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 23.046529379571165,
            "unit": "iter/sec",
            "range": "stddev: 0.000027820935051095757",
            "extra": "mean: 43.39048121000019 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 21.845927504532273,
            "unit": "iter/sec",
            "range": "stddev: 0.000004880464859345606",
            "extra": "mean: 45.77512214999956 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 157.9872976667583,
            "unit": "iter/sec",
            "range": "stddev: 0.000036220453332844065",
            "extra": "mean: 6.329622790999906 msec\nrounds: 100"
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
          "id": "b4c1d9455ae65f686fe7faf002b2c137d04bde6d",
          "message": "separate release and build",
          "timestamp": "2020-12-19T17:55:05Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/27/commits/b4c1d9455ae65f686fe7faf002b2c137d04bde6d"
        },
        "date": 1608473994834,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 23.0513100056828,
            "unit": "iter/sec",
            "range": "stddev: 0.000029326682772585977",
            "extra": "mean: 43.381482429999494 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 21.843186259970473,
            "unit": "iter/sec",
            "range": "stddev: 0.000009209162151356162",
            "extra": "mean: 45.780866769999875 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 158.09984873763733,
            "unit": "iter/sec",
            "range": "stddev: 0.000012082123605656523",
            "extra": "mean: 6.325116741000016 msec\nrounds: 100"
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
          "id": "f3d8691fef7cb6e24871a1dfd88170dfb53c18ae",
          "message": "Merge pull request #27 from ChihChengLiang/separate-release-from-build\n\nseparate release and build",
          "timestamp": "2020-12-20T23:24:35+08:00",
          "tree_id": "1592ad7562cddacc7e108db78c0ee69600cdd266",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/f3d8691fef7cb6e24871a1dfd88170dfb53c18ae"
        },
        "date": 1608478090913,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 23.03720816342586,
            "unit": "iter/sec",
            "range": "stddev: 0.000012904582275550032",
            "extra": "mean: 43.40803768000029 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 21.827003459585534,
            "unit": "iter/sec",
            "range": "stddev: 0.000006944996720186864",
            "extra": "mean: 45.81480924999994 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 158.35482895489935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022902280241782506",
            "extra": "mean: 6.314932147000121 msec\nrounds: 100"
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
          "id": "d368b99fbad7312f0078d19e83493f2602944900",
          "message": "bump 1.6.1",
          "timestamp": "2020-12-20T15:24:39Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/28/commits/d368b99fbad7312f0078d19e83493f2602944900"
        },
        "date": 1608478217710,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 23.02232851150376,
            "unit": "iter/sec",
            "range": "stddev: 0.00014176752476806535",
            "extra": "mean: 43.436092900000176 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 21.834611715605792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030923389436297177",
            "extra": "mean: 45.798845109999036 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 158.38550302609528,
            "unit": "iter/sec",
            "range": "stddev: 0.000004021737871997244",
            "extra": "mean: 6.313709152000115 msec\nrounds: 100"
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
          "id": "b7e057b7a0c8752239dac8aa8c83db4b65d2a359",
          "message": "Merge pull request #28 from ChihChengLiang/bumpv1.6.1\n\nbump 1.6.1",
          "timestamp": "2020-12-20T23:30:50+08:00",
          "tree_id": "0abbe6770809db7d4e19e857ea25fcca7108b582",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/b7e057b7a0c8752239dac8aa8c83db4b65d2a359"
        },
        "date": 1608478491449,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 16.935892576668504,
            "unit": "iter/sec",
            "range": "stddev: 0.0007594914095334829",
            "extra": "mean: 59.046194080000014 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 16.03210570763514,
            "unit": "iter/sec",
            "range": "stddev: 0.0008202411363363777",
            "extra": "mean: 62.37483822999991 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 116.9179921308234,
            "unit": "iter/sec",
            "range": "stddev: 0.00025977050115277557",
            "extra": "mean: 8.553003534999704 msec\nrounds: 100"
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
          "id": "30fc7ad39bf6766bc31c6382f9a47c43652f87c9",
          "message": "fix release script",
          "timestamp": "2020-12-20T15:30:53Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/29/commits/30fc7ad39bf6766bc31c6382f9a47c43652f87c9"
        },
        "date": 1608479258615,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 16.775920531347687,
            "unit": "iter/sec",
            "range": "stddev: 0.0007508567443445344",
            "extra": "mean: 59.60924756000053 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 15.904785662179428,
            "unit": "iter/sec",
            "range": "stddev: 0.0004651713480747311",
            "extra": "mean: 62.874157580000364 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 116.664400398468,
            "unit": "iter/sec",
            "range": "stddev: 0.00025733799039241105",
            "extra": "mean: 8.571595075999994 msec\nrounds: 100"
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
          "id": "aa7d7c9671a7daae031c5e5a26d49eb7c06a51eb",
          "message": "fix release script",
          "timestamp": "2020-12-20T15:30:53Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/29/commits/aa7d7c9671a7daae031c5e5a26d49eb7c06a51eb"
        },
        "date": 1608480120745,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 19.361785109840085,
            "unit": "iter/sec",
            "range": "stddev: 0.00017506684950419074",
            "extra": "mean: 51.64813028999987 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 18.302398867984337,
            "unit": "iter/sec",
            "range": "stddev: 0.00010886960671723367",
            "extra": "mean: 54.637646529999984 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 133.02264603145997,
            "unit": "iter/sec",
            "range": "stddev: 0.00005534209053514701",
            "extra": "mean: 7.517516978000117 msec\nrounds: 100"
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
          "id": "c1bcc59aebfb805487daea6b6976cd2ebb5d9210",
          "message": "Merge pull request #29 from ChihChengLiang/fix-release-script\n\nfix release script",
          "timestamp": "2020-12-21T00:02:34+08:00",
          "tree_id": "bd11b93f33fb564dc1776c0811a72b4bea4dc2d2",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/c1bcc59aebfb805487daea6b6976cd2ebb5d9210"
        },
        "date": 1608480400916,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 17.620836654285924,
            "unit": "iter/sec",
            "range": "stddev: 0.001831918291270145",
            "extra": "mean: 56.750994270000774 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 17.318589868837943,
            "unit": "iter/sec",
            "range": "stddev: 0.0012450762439681466",
            "extra": "mean: 57.741421650000575 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 125.73259675443316,
            "unit": "iter/sec",
            "range": "stddev: 0.0003708701688855232",
            "extra": "mean: 7.9533869959998365 msec\nrounds: 100"
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
          "id": "09522c7f36050f2199fdda41494d7aaa2ceab4eb",
          "message": "bump pyo3 maturin for apple m1 support",
          "timestamp": "2020-12-20T16:02:37Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/31/commits/09522c7f36050f2199fdda41494d7aaa2ceab4eb"
        },
        "date": 1613808125522,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 19.16458728067853,
            "unit": "iter/sec",
            "range": "stddev: 0.00002759258747491012",
            "extra": "mean: 52.17957399000113 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 18.16280728041455,
            "unit": "iter/sec",
            "range": "stddev: 0.000028349491241970563",
            "extra": "mean: 55.057568170000195 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 132.17948345931177,
            "unit": "iter/sec",
            "range": "stddev: 0.000019311924508862347",
            "extra": "mean: 7.56547063000005 msec\nrounds: 100"
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
          "id": "db65953406d584cbc57e8e7ba3f2619dbd46e874",
          "message": "bump pyo3 maturin for apple m1 support",
          "timestamp": "2020-12-20T16:02:37Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/31/commits/db65953406d584cbc57e8e7ba3f2619dbd46e874"
        },
        "date": 1613825835539,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 19.006415560644175,
            "unit": "iter/sec",
            "range": "stddev: 0.001052550415814393",
            "extra": "mean: 52.61381330999938 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 18.207483934498033,
            "unit": "iter/sec",
            "range": "stddev: 0.00016960842248849427",
            "extra": "mean: 54.92247054000046 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 132.36593812759097,
            "unit": "iter/sec",
            "range": "stddev: 0.00003886334405211054",
            "extra": "mean: 7.554813679000063 msec\nrounds: 100"
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
          "id": "cb5f19633546dd08b67b59771d230cb2d2c9bdc3",
          "message": "Merge pull request #31 from ChihChengLiang/apple-m1-support\n\nbump pyo3 maturin for apple m1 support",
          "timestamp": "2021-02-20T20:58:16+08:00",
          "tree_id": "d7b82f8500811b219cae7d1292fed04e29ded620",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/commit/cb5f19633546dd08b67b59771d230cb2d2c9bdc3"
        },
        "date": 1613826130281,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 20.07448410485438,
            "unit": "iter/sec",
            "range": "stddev: 0.0011934135499046818",
            "extra": "mean: 49.81448064999995 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 18.870208076268554,
            "unit": "iter/sec",
            "range": "stddev: 0.0013122835794833958",
            "extra": "mean: 52.993586290000394 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 137.74162893263008,
            "unit": "iter/sec",
            "range": "stddev: 0.00028808115978074265",
            "extra": "mean: 7.259969319000163 msec\nrounds: 100"
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
          "id": "0e0e3756de30db5b7b897639c539293abf2d863d",
          "message": "Verify multiple aggregate signature",
          "timestamp": "2021-02-20T12:58:19Z",
          "url": "https://github.com/ChihChengLiang/milagro_bls_binding/pull/33/commits/0e0e3756de30db5b7b897639c539293abf2d863d"
        },
        "date": 1628132081668,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_verifying_aggregate_of_128_signatures",
            "value": 24.573708808978438,
            "unit": "iter/sec",
            "range": "stddev: 0.00000763605484624266",
            "extra": "mean: 40.693898009999714 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_verifying_aggregation_of_128_signatures_with_two_distinct_messages",
            "value": 23.276304658267023,
            "unit": "iter/sec",
            "range": "stddev: 0.000006005719397784958",
            "extra": "mean: 42.96214603999999 msec\nrounds: 10"
          },
          {
            "name": "benchmark.py::test_single_verify",
            "value": 166.28588697892687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024474494679985507",
            "extra": "mean: 6.013739459000078 msec\nrounds: 100"
          }
        ]
      }
    ]
  }
}