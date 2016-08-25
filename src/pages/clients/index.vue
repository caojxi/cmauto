<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">

        <page-header title="Clients"></page-header>

        <div class="content">
          <button class="btn btn-sm btn-success btn-icon pull-right"><i class="fa fa-plus"></i></button>

          <div class="table-responsive table-full-width">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Cars</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dakota Rice</td>
                  <td>$36,738</td>
                  <td>Niger</td>
                  <td>Oud-Turnhout</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { ClientApi } from 'vx/actions'
  import { clients } from 'vx/getters'

  export default {
    vuex: {
      actions: {
        all: ClientApi.all
      },
      getters: {
        clients
      }
    },

    created() {
      this.all()
    }
  }
</script>
