[Issue 1](https://code.google.com/p/supergenpass-chrome-session/issues/detail?id=1): Remove the original SGP bookmarklet need fully, for security sake

# Introduction #

The bookmarklet model of SGP has a real vulnerability, hence should be avoided.

http://akibjorklund.com/2009/supergenpass-is-not-that-secure

http://akibjorklund.com/files/2009/10/supergenpass-vulnerability-demo.html

Since chrome extensions are safer, this extension should do the job of the bookmarklet's, fully. Mainly, not to be blocked by one master password for the whole session.

# Details #

[updated in the issue 1 as a comment](As.md)
1.2 released with two new features in this direction.

- You can store multiple passwords for the session (stored passwords are shown as sgp
hash)

- And you can view the password for that site by retyping anytime.

The key missing point is the password options like, subdomain changing or password
length, which I have never used. Maybe I need to see the domain name used (TODO).