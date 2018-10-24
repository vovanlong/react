# Lab week 1

### Roadmap

- Các View cơ bản trong React-native.
    - Giới thiệt về View và Component.
    - Phân loại View.
 - Các sự kiện cơ bản của View.
    - Click event.
    - Change value event.
 - State và Props trong React native, Lifecycle của Component.
    - State.
    - Props.
    - Lifecycle.

#### 1. View

<img src="./image/image_view_import.png" width="600px"/>

<img src="./image/img_view.png" width="600px"/>

#### 2. Style

<img src="./image/img_style.png" width="400px"/>

#### 3. State

 - Init default state

 <img src="./image/img_init_state.png" width="600px"/>

 - Get state

 ```js
    const switchStatus = this.state.switchStatus;
    const textChange = this.state.textChange;
```

 - Set state

 ```js
    this.setState({
        switchStatus:status,
        textChange:text
    });
```

#### 4. Event

 - Click Button

<img src="./image/event_click.gif" width="300px"/>

Handle button click

<img src="./image/img_event_click.png" width="300px"/>

 - Text Change

<img src="./image/event_text_change.gif" width="300px"/>

Handle Input view

<img src="./image/img_event_text_change.png" width="300px"/>

 - Switch change

<img src="./image/event_switch_change.gif" width="300px"/>

Handle switch view

<img src="./image/img_event_switch.png" width="300px"/>

#### 5. Lifecycle

```js
    constructor()

    static getDerivedStateFromProps(props, state)

    render()

    componentDidMount()

    componentWillUnmount()
```