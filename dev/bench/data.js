window.BENCHMARK_DATA = {
  "lastUpdate": 1587958322181,
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
      }
    ]
  }
}