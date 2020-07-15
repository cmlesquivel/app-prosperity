import {
  FECHING_DATA,
  FECHING_DATA_FIALURE,
  FECHING_DATA_SUCCESS,
} from "../actions/types";

const initialState1 = {
  isFetching: false,
  error: false,
  data: {
    motorCicles: [
      {
        id: "4a870d40-f9e0-4459-9a4c-13789021d3d5",
        referencia: "Suzuki Gixxer Modelo 2021",
        motor: "4 tiempos",
        precio: "2950000",
        marcaMotor: "AKT",
        cilindrada: "125 cc",
        picture:
          "https://img.motoryracing.com/noticias/portada/32000/32864-n.jpg",
      },
      {
        id: "d55430e3-9a9b-487a-ae7a-814be815b7fe",
        referencia: "Bajaj Boxer S 2021",
        motor: "4 tiempos",
        precio: "3499000",
        marcaMotor: "BAJAJ",
        cilindrada: "100 cc",
        picture:
          "http://blogvertigo.es/wp-content/uploads/2014/05/BMW-Concept-Roadster-0.jpg",
      },
      {
        id: "4e9ad0bb-ed31-4b2a-a38c-4fd1f79d3cac",
        referencia: "Akt 180ttr",
        motor: "4 tiempos",
        precio: "3500000",
        marcaMotor: "AKT",
        cilindrada: "179 cc",
        picture:
          "https://fotos00.formulamoto.es/2019/11/12/690x278/honda-cbr1000rr-fireblade.jpg",
      },
      {
        id: "8abe12b8-7d5e-4ead-98fd-6cbf7f601d1f",
        referencia: "Apache Rtr 160",
        motor: "4 tiempos",
        precio: "3450000",
        marcaMotor: "SOHC",
        cilindrada: "160 cc",
        picture:
          "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/06/16/apache-rtr-200-2v-quick-facts-banner-3.png?itok=ptI01LT1&c=9c76c52205d2212926d8516af135ef51",
      },
    ],
  },
};

const initialState = {
  data: [],
  isFetching: false,
  error: false,
};

const motorcicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true,
      };

    case FECHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };

    case FECHING_DATA_FIALURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
  }
  return state;
};

export default motorcicleReducer;
