<template>
  <div>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="selected"
        type="text"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      />
      <b-input-group-append>
        <b-form-datepicker
          v-model="selected"
          :hide-header="true"
          button-only
          right
          locale="en-US"
          aria-controls="example-input"
          @context="onContext"
       />
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "Calendario",
  data() {
    return {
      formatted: "",
      selected: ""
    };
  },
  methods: {
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted;
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD;
      this.$emit("selected", this.selected);
    },
  },
};
</script>
