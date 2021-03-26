# Security Policy
We take the security of our software products and services seriously, which includes all source code repositories managed through my GitHub account. You can view the current supported versions of this software [here][supported].

If you believe you have found a security vulnerability in any of our repositories that meets our definition of a security vulnerability, please report it as [described below](#reporting-a-vulnerability).

## Reporting Security Issues

**Please do not report security vulnerabilities through public GitHub issues.** Instead, please
report them to the Security Response Center at [david@bsdadm.com][security-email].
If possible, encrypt your message with our PGP key; please download it from [here][pubkey].

You should receive a response within 24 hours. If for some reason you do not, please follow up via
email to ensure we received your original message.

Please include the requested information listed below (as much as you can provide) to help us better
understand the nature and scope of the possible issue:

  * Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
  * Full paths of source file(s) related to the manifestation of the issue
  * The location of the affected source code (tag/branch/commit or direct URL)
  * Any special configuration required to reproduce the issue
  * Step-by-step instructions to reproduce the issue
  * Proof-of-concept or exploit code (if possible)
  * Impact of the issue, including how an attacker might exploit the issue

This information will help me triage your report more quickly.

## Preferred Languages

We prefer all communications to be in English.

## Policy

We follow the principle of [Coordinated Vulnerability Disclosure][cvd].

## Reporting a Vulnerability

To report a security vulnerability please send an email to [david@bsdadm.com][security-email].

Security Vulnerabilities are checked for every day and responded to with an update on its status within 48 hours.

[security-email]: mailto:david@bsdadm.com
[pubkey]: https://bsdadm.com/pubkey
[supported]: ./SLC.md
[cvd]: ./docs/Coordinated_Vulnerability_Disclosure.md