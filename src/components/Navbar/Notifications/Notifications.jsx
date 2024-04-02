import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bell, Trash } from "lucide-react";
import { useNotification } from "../../../Context/NotificationsContext/NotificationContext";

const Notifications = () => {
  const { notifications, clearNotifications, removeNotification, setReLoad, reLoad} =
    useNotification();
  const [isOpen, setIsOpen] = useState(false);
  const [notificationList, setNotificationList] = useState(notifications);

  useEffect(() => {
    
    setNotificationList(notifications);
  }, [notifications, isOpen,reLoad ]);

  const getNotificationClass = (type) => {
    switch (type) {
      case "weatherSuccess":
        return "bg-green-500";
      case "weatherError":
        return "bg-red-500";
      case "weatherWarning":
        return "bg-yellow-500";
      default:
        return "";
    }
  };

  function toggleNotifications() {
    setReLoad(true);
    setIsOpen(!isOpen);
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div
          className="w-[30px] h-[30px] rounded-full bg-[#1e1e1e] flex justify-center items-center text-[#feffff] p-1 cursor-pointer z-[1030] relative"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleNotifications}
        >
            <div className="absolute top-[-5px] right-[-5px] h-[15px] w-[15px] bg-indigo-500 text-white rounded-full text-[4px]  text-center flex justify-center items-center">{Object.entries(notifications).reduce((total, [_, items]) => total + items.length, 0)}</div>

          <Bell size={12} onClick={toggleNotifications} />
        </div>
        <Transition
          as={Fragment}
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-60 origin-top-right bg-[#1e1e1e] pt-[5px] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-scroll h-[300px]">
            <Menu.Item key="self">
              <div className="flex flex-row justify-between items-center">
                <button
                  onClick={clearNotifications}
                  className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-red-500 focus:outline-none text-center"
                >
                  Clear
                </button>
                <button
                  onClick={()=>{setReLoad(true)}}
                  className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-green-500 focus:outline-none text-center"
                >
                  ReLoad
                </button>
              </div>
            </Menu.Item>
            {Object.entries(notificationList).map(([type, items]) => (
              <div key={type}>
                {items.map((notification, index) => (
                  <Menu.Item key={index}>
                    <div
                      className={`flex justify-between items-center px-4 py-2 h-[60px]  rounded-md mb-[5px] ${getNotificationClass(
                        type
                      )}`}
                    >
                      <a
                        href="#"
                        className="text-white block text-sm"
                        style={{ width: "calc(100% - 30px)" }}
                      >
                        {notification.message}
                      </a>
                      <button
                        className="hover:text-gray-400 text-white focus:outline-none"
                        onClick={() => removeNotification(type, index)}
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </Menu.Item>
                ))}
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Notifications;
