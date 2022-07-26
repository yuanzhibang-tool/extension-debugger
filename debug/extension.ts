import { ipc } from "@yuanzhibang/node";
// 测试用的模拟extension 

const willInitData = {
    type: 'willInitData'
};
ipc.sendOnWillInit(willInitData);

const onInitData = {
    type: 'onInitData'
};

ipc.sendOnInit(onInitData);

ipc.onGetProperty((sender, message) => {
    console.log(message);
    sender.next({});
});

ipc.onUserExit((sender, message) => {
    console.log(message);
    sender.next({});
});

const willExitData = {
    type: 'willExitData'
};

ipc.sendOnWillExit(willExitData);