const ShortcutMenu = ({ event }) => {
  return (
    <div
      className="fixed w-[3.5em] h-[3.5em] rounded-[15px] bottom-[5%] right-[5%] cursor-pointer bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline noSelect"
      onClick={() => {
        event((i) => !i);
      }}
    >
      <box-icon name="plus" color="#ffffff" size="3.5em"></box-icon>
    </div>
  );
};

export default ShortcutMenu;
