# Lock account

Under certain circumstances there is need for an account to be locked. It should not be able to use/login to a locked account.

## Lock types

1) `Locked: Compromized security`
2) `Locked: Malicious use`
3) `Locked: By admin`

## Acceptance tests

- If an account is locked when there's someone already logged in to the account, that session is terminated and the user kicked out.
- When an account is locked one can not login to that account.
  - When one tries to login to a locked account, there's a message explaining the situation.
  - When one tried to login to a locked account, there are instructions on how to unlock it.
- The way of unlocking the account depends on the reason for locking it.
  - 1) User may unlock the account himself by verifying his identity via e-mail and setting a new password.
  - 2) Time unlocks the account if being idle (not attempting to login or flood requests) for x minutes.
  - 3) Locked for other reasons, only admins can unlock the account.
