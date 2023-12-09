import Rewards from "./rewards/Rewards";

const Details = () => {
  return (
    <div className="w-full rounded-lg border bg-white px-6 py-10 md:px-7 lg:px-9 xl:px-12 xl:py-12">
      <h2 className="text-lg font-bold xl:text-xl">About this project</h2>
      <p className="mt-6 text-sm text-DarkGray xl:mt-8 xl:text-base xl:leading-8">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="mb-9 mt-6 text-sm text-DarkGray xl:text-base xl:leading-8">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <Rewards
        title="Bamboo Stand"
        pledge={25}
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        remaining={101}
      />
      <Rewards
        title="Black Edition Stand"
        pledge={75}
        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        remaining={64}
      />
      <Rewards
        title="Mahogany Special Edition"
        pledge={200}
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        remaining={0}
      />
    </div>
  );
};

export default Details;
