#!/usr/bin/env python
import pika
import random
import time

set_queueAB = "AB"
get_queueBA = "BA"

win_A="Win_A"


def win():
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()
    channel.queue_declare(queue=win_A)
    channel.basic_publish(
        exchange='', routing_key=win_A, body="1")
    #connection.close()

def setNumber(number):
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()
    channel.queue_declare(queue=set_queueAB)
    channel.basic_publish(
        exchange='', routing_key=set_queueAB, body=str(number))
    #connection.close()

def getNumber():
    try:
        connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost'))
        channel = connection.channel()
        channel.queue_declare(queue=get_queueBA)
        method_frame, header_frame, body = channel.basic_get(queue=get_queueBA)
        if method_frame.NAME == 'Basic.GetEmpty':
            #connection.close()
            return(-1)
        else:
            channel.basic_ack(delivery_tag=method_frame.delivery_tag)
           #connection.close()     
            return int(body)
    except:
        return(-1)

def randomArray():
    random_array = []
    for i in range(0, 5):
        randomNumber = (random.randint(0, 20))
        random_array.append(randomNumber)
    return random_array

control = True

print("-----------------")
while(control):
    time.sleep(1)
    randomNumber = (random.randint(0, 20))
    setNumber(randomNumber)
    receivedData=getNumber()
    if receivedData != -1:
        random_array=randomArray()
        print("Gelen Veri : "+str(receivedData) +
              "  Tahminler  : "+str(random_array))
        cntl=receivedData in random_array
        if cntl :
            win()
        else:
            print("A Kaybetti")
            print("-----------------")


    