# -*- coding: utf-8 -*-
import os
import requests
import shlex
from subprocess import Popen, PIPE

from bs4 import BeautifulSoup


HEADERS_CHROME = {
    "content-type":"text/html; charset=utf-8",
    "x-requested-with": "XMLHttpRequest",
    "user-agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7"
}

r = requests.get('https://www.russiancupid.com/en/auth/login',
                 headers={"user-agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"})
beautiful = BeautifulSoup(r.text)
with open('responses/response.html', 'w') as response:
    response.write(beautiful.prettify().encode('UTF-8'))

def get_exitcode_stdout_stderr():
    args = shlex.split('casperjs get_values_from_response.js')

    proc = Popen(args, stdout=PIPE, stderr=PIPE)
    out, err = proc.communicate()
    exitcode = proc.returncode

    fpBB, ioBB, useless_shit = out.split('\n')
    print fpBB
    print ioBB

get_exitcode_stdout_stderr()
