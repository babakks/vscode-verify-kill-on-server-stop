# How to verify

This repo is created to verify [this PR](https://github.com/microsoft/vscode/pull/163779).

## Verify: when `killOnServerStop` is enabled

1. Clone this repository.
2. Run VS Code.
3. Click on "Open folder" and select the cloned directory.
4. Make sure `killOnServerStop` is set to `true` in the launch configuration file; for the entry named `server (then, invoke client)`.
5. In the "Run and Debug" sidebar, select `server (then, invoke client)` configuration and run it.

You should now see two debug sessions start; "client" and "server". After 10 seconds, the server automatically stops. The client should now stop, and no ongoing debug sessions should be seen.

## Verify: when `killOnServerStop` is disabled

Follow the above instruction, but make sure `killOnServerStop` is set to `false`.

At the end, you should see that the client debug session is still running at wouldn't automatically end.
