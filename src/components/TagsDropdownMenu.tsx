import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, DotFilledIcon } from "@radix-ui/react-icons";
import axios from "axios";

const TagsMenu = (props: { onTagSelect: Function }) => {
  const [selectedTag, setSelectedTag] = React.useState("");
  const [tagsList, setTagsList] = React.useState<
    { name: string; slug: string; _id: string }[]
  >([]);
  const handleTagSelect = (tag: string) => {
    props.onTagSelect(tag);
  };

  function makeMenuItems(item: {
    tagItem: string;
    slug: string;
    _id: string;
  }): JSX.Element {
    return (
      <DropdownMenu.RadioItem
        className="text-[13px] leading-none text-bg-200 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-primary-200 data-[highlighted]:text-text-100"
        value={item.slug}
        key={item._id}
      >
        <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <DotFilledIcon />
        </DropdownMenu.ItemIndicator>
        {item.tagItem}
      </DropdownMenu.RadioItem>
    );
  }
  function Menu() {
    return (
      <>
        {tagsList.map((item) =>
          makeMenuItems({ tagItem: item.name, slug: item.slug, _id: item._id })
        )}
      </>
    );
  }

  React.useEffect(() => {
    async function fetchQuoteTags() {
      const response = await axios.get("https://api.quotable.io/tags");
      setTagsList(response.data);
    }
    fetchQuoteTags();
  }, []);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-text-200 bg-primary-300 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customize options"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-primary-300 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Label className="pl-[25px] text-xs leading-[25px] text-text-200">
            Tags
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup
            value={selectedTag}
            onValueChange={(e) => {
              setSelectedTag(e);
              handleTagSelect(e);
            }}
          ></DropdownMenu.RadioGroup>
          {Menu()}
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default TagsMenu;
