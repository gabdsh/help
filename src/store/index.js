import { createStore } from "vuex";
import { requestWt } from "@/utils/request.js";

export default createStore({
  state: {
    questions: [],
    videos: [],
    selected_question: {
      id: "",
      name: "",
      text_area: "",
    },
    helpdesk_mail: "agent-learn@vsk.ru",
  },
  getters: {},
  mutations: {
    setQuestions(state, payload) {
      state.questions = payload.data.questions;
      state.videos = payload.data.videos;
      state.helpdesk_mail = payload.data.helpdesk_mail;
    },
    setSeleted(state, payload) {
      Object.entries(state.selected_question).forEach(
        ([key]) => (state.selected_question[key] = payload[key])
      );
    },
  },
  actions: {
    getQuestions(context) {
      return requestWt("Questions")
        .get()
        .then((response) => {
          if (response.type == "error") {
            return response;
          } else {
            context.commit("setQuestions", response);
          }
        });
    },
  },
  modules: {},
});
