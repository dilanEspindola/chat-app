import "./chat-messages.css";

export const Chat = () => {
  return (
    <div className="col-span-2 p-5 flex flex-col justify-between gap-10">
      <div className="h-[430px] overflow-y-auto flex flex-col gap-5 chat-messages-container">
        <div className="bg-slate-900 w-6/12 py-5 px-3 rounded-2xl">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="bg-slate-900 w-6/12 py-5 px-3 rounded-2xl self-end">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          </p>
        </div>
        <div className="bg-slate-900 w-6/12 py-5 px-3 rounded-2xl self-end">
          <p className="text-white">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="bg-slate-900 w-6/12 py-5 px-3 rounded-2xl">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            libero, tenetur sed accusamus inventore iusto soluta unde voluptates
          </p>
        </div>
      </div>
      <form>
        <textarea
          placeholder="type a message"
          className="bg-slate-900 w-full p-5 max-h-[80px] min-h-[80px] text-white rounded-lg"
        />
      </form>
    </div>
  );
};
