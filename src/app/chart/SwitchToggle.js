import * as Switch from "@radix-ui/react-switch";

export default function SwitchToggle({ showLocation, setShowLocation }) {
  return (
    // <form>
    <div className="flex items-center">
      <label
        className="text-black text-md leading-none pr-4"
        htmlFor="show-location"
      >
        Show location
      </label>
      <Switch.Root
        className="w-10 h-6 bg-black-alpha-900 rounded-full relative shadow-lg  data-[state=unchecked]:bg-slate-300 data-[state=checked]:bg-black"
        id="show-location"
        onCheckedChange={() => setShowLocation(!showLocation)}
      >
        <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-100 data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-4" />
      </Switch.Root>
    </div>
    // </form>
  );
}