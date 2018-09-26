<template>
<main>
<div class="container game-box">
    <div class="row">
    <div class="col-lg-8 col-sm-12">
    <div class="min-h-screen text-black bg-grey-lighter p-8">
        <div class="bg-white rounded shadow-lg max-w-md mx-auto py-8 px-4">

        <sortable-list v-model="todos">
        <ul class="list-reset" slot-scope="{ items }">
          <sortable-item v-for="todo in items" :key="todo.id">
            <li class="bg-white px-4">
              <div class="flex items-center border-b border-grey-lighter">
                <div class="flex-grow flex items-center py-4">
                  <input type="checkbox" v-model="todo.complete" class="mr-3">
                    <span>{{ todo.description }}</span>
                </div>
                  <sortable-handle>
                    <svg></svg>
                  </sortable-handle>
              </div>
            </li>
          </sortable-item>
        </ul>
      </sortable-list>
      </div>
    </div>
    </div>
    <div class="col-lg-4">
    </div>
    </div>
</div>
</main>
</template>
<script>
import SortableList from '../draggable/SortableList'
import SortableItem from '../draggable/SortableItem'
import SortableHandle from '../draggable/SortableHandle'

export default {
    components: {
    SortableList,
    SortableItem,
    SortableHandle,
  },
  data() {
    return {
      todos: [
        { id: 1, description: "Get travel insurance", complete: false },
        { id: 2, description: "Pay hydro bill", complete: false },
        { id: 3, description: "Record podcast with Taylor", complete: false },
        { id: 4, description: "Design Twitter card for new landing page", complete: false },
        { id: 5, description: "Update credit card for Typekit subscription", complete: false },
        ],
        }
    },
    methods:{
        
    }
}
</script>
<style>
.game-box{
    margin-top: 50px;
}
ul{
    list-style: none;
}

.svg{
    height: 10px;
}
</style>

