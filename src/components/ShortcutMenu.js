const ShortcutMenu = () => {
  return (
    <div className="fixed w-[4em] h-[4em] rounded-lg bottom-[5%] right-[5%] cursor-pointer bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline">
      <box-icon name='plus' color="#ffffff" size="4em"></box-icon>
    </div>
  );
};

export default ShortcutMenu;
