function Account() {
  return (
    <div className="relative flex h-screen w-full justify-center bg-gray-50">
      <div className="w-full border-b border-black sm:max-w-lg">
        <h2 className="w-full bg-white py-6 pl-6 text-xl font-medium shadow sm:static sm:bg-transparent sm:text-3xl sm:shadow-none">
          Account Settings
        </h2>
        <div className="space-y-6 px-4 pb-6">
          <div className="mt-12 flex w-full gap-8">
            <div className="avatar size-18 rounded-full shadow">
              <img src="profilePic.png" alt="" className="size-full" />
            </div>
            <div>
              <h2 className="text-lg font-medium">Marie Doe</h2>
              <p>Marry@gmail.com</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            cupiditate, unde praesentium rem pariatur debitis atque optio animi
            sit reprehenderit, iure fugiat ratione, corrupti rerum dicta.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Account;
