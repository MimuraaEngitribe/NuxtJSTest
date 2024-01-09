<template>
  <div>
    <ul>
      <li v-for="company in companies" :key="company.id">
        {{ company.name }} (ID: {{ company.id }})
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      companies: [],
    };
  },
  apollo: {
    companies: {
      query: gql`{
        companies {
          name
          id
        }
      }`,
    },
  },
};
</script>