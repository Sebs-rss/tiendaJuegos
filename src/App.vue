<template>
  <div>
    <h1>Tienda de Juegos 32 Bits</h1>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <!--           <th>Color</th> -->
          <th>Modificar Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <!-- <td>{{ juego.color }}</td> -->
          <td>
            <div class="botones">
              <button @click="cambiarStock(juego.codigo, 1)">+</button>
              <button @click="cambiarStock(juego.codigo, -1)">-</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    // Usar mapState para consumir los juegos desde el estado global
    ...mapState({
      juegos: (state) => state.juegos,
    }),
  },
  methods: {
    // Mapear la acción para modificar el stock
    ...mapActions(["updateStock"]),
    cambiarStock(codigo, cantidad) {
      this.updateStock({ codigo, cantidad });
      console.log(
        `Solicitud de cambio de stock para el código ${codigo} con cantidad ${cantidad}`
      );
    },
  },
};
</script>

<style>
/* Estilos opcionales */
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
  color: black;
}

td:nth-child(4)::before {
  content: "$";
}

td:nth-child(4) {
  text-align: right;
  font-family: monospace;
}

.botones {
  display: flex;
 /*  justify-content: space-between; */
 gap: 10px;
 justify-content: center;
}

button {
  padding: 5px 10px;
  border: solid 1px white;
}
</style>
