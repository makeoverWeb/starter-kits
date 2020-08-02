const actions = {
  changeName(name: string) {
    return {
      type: 'CHANGE_NAME',
      data: name
    };
  }
};

export default actions;
