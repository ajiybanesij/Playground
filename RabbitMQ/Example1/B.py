#!/usr/bin/env python
import pika
import random
import time

set_queueBA = "BA"
get_queueAB = "AB"

win_B = "Win_B"


def win():
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()
    channel.queue_declare(queue=win_B)
    channel.basic_publish(
        exchange='', routing_key=win_B, body="1")
    #connection.close()


def setNumber(number):
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()
    channel.queue_declare(queue=set_queueBA)
    channel.basic_publish(
        exchange='', routing_key=set_queueBA, body=str(number))

    #connection.close()


def getNumber():
    try:
        connection = pika.BlockingConnection(
            pika.ConnectionParameters(host='localhost'))
        channel = connection.channel()
        channel.queue_declare(queue=get_queueAB)
        method_frame, header_frame, body = channel.basic_get(queue=get_queueAB)
        if method_frame.NAME == 'Basic.GetEmpty':
            #connection.close()
            return(-1)
        else:
            channel.basic_ack(delivery_tag=method_frame.delivery_tag)
            #connection.close()
            return(int(body))
    except:
        return -1


def randomArray():
    random_array = []
    for i in range(0, 5):
        randomNumber = (random.randint(0, 20))
        random_array.append(randomNumber)
    return random_array


print("-----------------")
control = True
while(control):
    time.sleep(1)
    randomNumber = (random.randint(0, 20))
    setNumber(randomNumber)
    receivedData = getNumber()
    if receivedData != -1:
        random_array = randomArray()
        print("Gelen Veri : "+str(receivedData) +
              "  Tahminler  : "+str(random_array))

        cntl = receivedData in random_array
        if cntl:
            win()
        else:
            print("B Kaybetti")
            print("-----------------")
