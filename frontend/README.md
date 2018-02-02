#Notes
> this is not professional at all :P

### Why doesn't axios make this the default?

really important => the vm instance needs to be restated to send data.

```
  methods: {
    register() {
      const userData = JSON.parse(JSON.stringify(this.user));
      /* eslint-disable*/
      axios.post('http://127.0.0.1:5000/users', { user: userData })
      // eslint-disable-next-line
      .then((response) => { console.log(response)});
    }
  },
```