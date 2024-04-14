import os
import pyautogui
import subprocess

if subprocess.run(['cat', '/home/adi/win'], stdout=subprocess.PIPE).stdout.decode('utf-8')[0]=="3":
    pyautogui.rightClick()
    pyautogui.hotkey("win", "2")
    pyautogui.leftClick()
    os.system("echo 2 > ~/win")
elif subprocess.run(['cat', '/home/adi/win'], stdout=subprocess.PIPE).stdout.decode('utf-8')[0]=="2":
    pyautogui.leftClick()
    pyautogui.hotkey("win", "3")
    pyautogui.rightClick()
    os.system("echo 3 > ~/win")
