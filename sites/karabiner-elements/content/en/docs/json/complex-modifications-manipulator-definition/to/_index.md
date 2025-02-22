---
title: 'to event definition'
weight: 200
---

```json
{
    "key_code": "The name of key_code",
    "consumer_key_code": "The name of consumer_key_code",
    "pointing_button": "The name of pointing_button",

    "shell_command": "shell command",

    "select_input_source": {
        "language": "language regex",
        "input_source_id": "input source id regex",
        "input_mode_id": "input mode id regex"
    },

    "set_variable": {
        "name": "variable name",
        "value": "variable value"
    },

    "mouse_key": mouse_key definition,

    "sticky_modifier": sticky modifier definition,

    "software_function": software function definition,

    "modifiers": [
        modifier,
        modifier,
        ...
    ],

    "lazy": false,
    "repeat": true,
    "halt": false,
    "hold_down_milliseconds": 0
}
```

{{% alert title="Note" color="primary" %}}

The following keys are exclusive.<br/>
You cannot specify multiple items into one `to` entry.

-   `key_code`
-   `consumer_key_code`
-   `pointing_button`
-   `shell_command`
-   `select_input_source`
-   `set_variable`
-   `mouse_key`
-   `sticky_modifier`
-   `software_function` (`software_function` is available since Karabiner-Elements v13.5.1)

{{% /alert %}}

| Name                                                | Required | Description                                                                     |
| --------------------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| `key_code`                                          | Optional | Key code which you want to post                                                 |
| `consumer_key_code`                                 | Optional | Consumer key code (media key code) which you want to post                       |
| `pointing_button`                                   | Optional | Pointing button name which you want to post                                     |
| [`shell_command`](shell-command/)                   | Optional | Shell command which you want to execute                                         |
| [`select_input_source`](select-input-source/)       | Optional | Input source which you want to switch                                           |
| [`set_variable`](set-variable/)                     | Optional | A varaible name and value which you want to change                              |
| [`mouse_key`](mouse-key/)                           | Optional | A mouse key definition                                                          |
| [`sticky_modifier`](sticky_modifier/)               | Optional | A sticky modifier key definition                                                |
| [`software_function`](software_function/)           | Optional | A software function definition                                                  |
| [`modifiers`](modifiers/)                           | Optional | Modifiers which are post with the event                                         |
| [`lazy`](lazy/)                                     | Optional | Lazy modifier flag                                                              |
| [`repeat`](repeat/)                                 | Optional | Key repeat flag                                                                 |
| [`halt`](halt/)                                     | Optional | A flag for `to_after_key_up`                                                    |
| [`hold_down_milliseconds`](hold-down-milliseconds/) | Optional | Interval of `key_down` and `key_up` when these events are sent at the same time |

## Investigate key names

-   You can find `key_code`, `consumer_key_code` and `pointing_button` names by [EventViewer](../../../manual/operation/eventviewer/).
-   You can also confirm [names in list](https://github.com/pqrs-org/Karabiner-Elements/blob/main/src/apps/PreferencesWindow/Resources/simple_modifications.json).
    (See `"data"` in the list.)

{{% alert title="Tip" color="primary" %}}

You can also specify `key_code`, `consumer_key_code`, `pointing_button` with raw number as follows.<br />

```json
{
    "to": [
        {
            "key_code": 41
        }
    ]
}
```
