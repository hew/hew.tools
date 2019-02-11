module ModalConfig = {
  type t = bool;
  let value = false;
  let debugName = "ModalStore";
};

module ModalStore = Stature.CreateStore(ModalConfig);
