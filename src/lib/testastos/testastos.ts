const delay = <
  TCallback extends () => TReturn,
  TReturn = ReturnType<TCallback>
>(
  action: TCallback,
  duration = 3000
) => {
  return new Promise<TReturn>((resolve) =>
    setTimeout(() => resolve(action()), duration)
  );
};

class Testastos {
  private _name;
  private _loading;
  constructor(name: string) {
    this._name = name;
    this._loading = false;
  }
  public get name() {
    return this._name;
  }
  public get isLoading() {
    return this._loading;
  }
  sayHi() {
    console.log(`Hello ${this._name}`);
  }
  async fetchNewName() {
    this._loading = true;
    const response = await delay(() => (this._name = "Bumbelbee"), 3000);
    this._loading = false;
    return response;
  }
}

export default Testastos;
