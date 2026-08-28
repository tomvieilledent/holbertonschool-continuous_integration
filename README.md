# holbertonschool-continuous_integration

## Task 0 : Lint on push

https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/32724537947/job/97422786735


## Task 1 : Tests on pull request

**Failed**<br>
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/32726534299/job/97428970973

**Passed**<br>
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/32726742326/job/97429629452


## Task 2  : Test with matrix on pull request

**Node 18.x**<br>
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/32823806469/job/97727390924

**Node 20.x**<br>
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/32823806469/job/97727390817

**Node 22.x**<br>
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/32823806469/job/97727390643


## Task 3 : 

**Without caching** - Time : 19s<br>
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/32827980929

**With caching** - Time : s<br>

## Docker image pipeline (image.yml)

Package: https://github.com/tomvieilledent/holbertonschool-continuous_integration/pkgs/container/holbertonschool-continuous_integration

### Task 0 : Build image on push

https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/33207600766

### Task 1 : Publish to GHCR (sha + latest)

https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/33207600766

### Task 2 : Tag on git tag push (v1.0.0)

https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/33207699663

### Task 3 : Build cache

Cache : `type=gha`

**No cache** - 70s<br>
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/33207600766

**With cache** - 63s<br>
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/33207699663

### Task 4 : Vulnerability scan

Trivy scans the image before push. A `CRITICAL` finding fails the job, so the image is not pushed.

Example of a blocked build (critical CVE found):<br>
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/33207469118
