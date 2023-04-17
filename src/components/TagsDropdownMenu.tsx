import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from 'classnames';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
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
    key: string;
  }): JSX.Element {
    return <SelectItem value={item.slug} key={item.key}>{item.tagItem}</SelectItem>;
  }
  const SelectItem :any= React.forwardRef(//@ts-ignore
    ({ children, className, ...props }, forwardedRef) => {
      return (
        <Select.Item
          className={classnames(
            "text-[13px] leading-none text-bg-100 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary-200 data-[highlighted]:text-text-100",
            className
          )}
          {...props}//@ts-ignore
          ref={forwardedRef}
        >
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
            <CheckIcon />
          </Select.ItemIndicator>
        </Select.Item>
      );
    }
  );
  function Menu() {
    return (
      <>
        {tagsList.map((item) =>
          makeMenuItems({ tagItem: item.name, slug: item.slug, key: item._id })
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
    <Select.Root>
      <Select.Trigger
        className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-primary-300 hover:text-text-100 text-bg-200 shadow-[0_2px_10px] shadow-black/10 hover:bg-primary-200 focus:shadow-[0_0_0_2px] focus:shadow-black hover:data-[placeholder]:text-text-100 data-[placeholder]:text-bg-200 outline-none"
        aria-label="Food"
      >
        <Select.Value placeholder="Select a Tag" />
        <Select.Icon className="text-text-200">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-primary-300 text-text-200 cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-text-200">
                Tags
              </Select.Label>
              {Menu()}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-primary-300 text-text-200 cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default TagsMenu;
