<template>
  <div>
    <label for="example-input"></label>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="valueC"
        type="text"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="valueC"
          hide-header="true"
          button-only
          right
          locale="en-US"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
  export default {
    name: "Calendario",
    data() {
      return {
        valueC: "",
        formatted: "",
        selected: "",
      }
    },
    methods: {
      onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      }
    }
  }
</script>
