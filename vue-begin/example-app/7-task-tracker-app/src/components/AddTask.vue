<template>
  <div>
    <form @submit="onSubmit" action="" class="add-form">
      <div class="form-control">
        <label for="">Task</label>
        <input type="text" name="text" placeholder="Add task" v-model="text" />
      </div>
      <div class="form-control">
        <label for="">Day & Time</label>
        <input
          type="text"
          name="day"
          placeholder="Add day & time"
          v-model="day"
        />
      </div>
      <div class="form-control form-control-check">
        <label for="">Set Reminder</label>
        <input type="checkbox" name="reminder" v-model="reminder" />
      </div>

      <input type="submit" value="save task" class="btn btn-block" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert(`Text doesn't type`);
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.$emit('add-task', newTask);

      this.text = '';
      this.day = '';
      this.reminder = '';
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
