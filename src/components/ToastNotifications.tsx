import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import { SyncLoader } from "react-spinners";

const ToastNotifications = (props: { context: string }) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="bg-bg-300 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        duration={1000}
      >
        <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-text-100 text-[15px]">
          <div className="flex items-center">
            {props.context}
            <SyncLoader color="rgb(222 222 222)" size={4} speedMultiplier={1.2} />
          </div>
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
};

export default ToastNotifications;
