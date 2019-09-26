# Dependencies
# Dependencies
import json
import requests
#from config import api_key
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import datetime
from IPython.lib.pretty import pprint
import os, csv, json, sys
import psycopg2
from sqlalchemy import create_engine
#engine = create_engine('postgresql://localhost:63576/SQLHW')

#%matplotlib inline


def scrape():

    cwd = os.getcwd()

    ApiKey= 'eMpdHL6BBBPdurOf5a9PbX276bW4lcSgcn1Nltgo'

    #url = 'https://api.nasa.gov/insight_weather/?api_key=eMpdHL6BBBPdurOf5a9PbX276bW4lcSgcn1Nltgo&feedtype=json&ver=1.0'

    #url = 'https://api.nasa.gov/insight_weather/?api_key=eMpdHL6BBBPdurOf5a9PbX276bW4lcSgcn1Nltgo&feedtype=json&ver=1.0'

    #url = 'https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=eMpdHL6BBBPdurOf5a9PbX276bW4lcSgcn1Nltgo'
    #url = 'https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=eMpdHL6BBBPdurOf5a9PbX276bW4lcSgcn1Nltgo'
    url = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json&where=pl_kepflag=1'

    #url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=eMpdHL6BBBPdurOf5a9PbX276bW4lcSgcn1Nltgo'

    response = requests.get(url).json()

    pprint("INSIDE ScRAPE")


    # open a file for writing

    

    outputfile = open(f'{cwd}\data\Data1.csv', 'w', newline='')

    pprint("INSIDE ScRAPE0")
    # create the csv writer object

    csvwriter = csv.writer(outputfile)

    count = 0

    for resp in response:

        if count == 0:

                header = resp.keys()

                csvwriter.writerow(header)

                count += 1

        csvwriter.writerow(resp.values())

    outputfile.close()

    pprint("INSIDE ScRAPE1")

    engine = create_engine('postgresql://postgres:Password00@localhost/NASA')
    connection = engine.connect()
        

    pprint("INSIDE ScRAPE2")

    conn = psycopg2.connect("host='localhost' port='5432' dbname='NASA' user='postgres' password='Password00'")

    pprint("INSIDE ScRAPE20")
    
    cur = conn.cursor()

    pprint("INSIDE ScRAPE201")

    cur.execute("truncate table kepler_system" )
    
    pprint("INSIDE ScRAPE21")
    
    #f = open(r'C:\\bootcamp\VisualProject\Data1.csv', 'r')
    f = open(f'{cwd}\data\Data1.csv', 'r')
    cur.copy_from(f, "kepler_system", sep=',')
    f.close()

    pprint("INSIDE ScRAPE22")

    conn.commit()
    conn.close()
    # cur.execute("""Copy kepler_system from 'C:\\bootcamp\VisualProject\Data1.csv';""")
    # conn.commit()
    # conn.close()

    #cur1 = conn.cursor()

    pprint("INSIDE ScRAPE3")

    conn = psycopg2.connect("host='localhost' port='5432' dbname='NASA' user='postgres' password='Password00'")
    cur = conn.cursor()

    #sql = "copy (SELECT * FROM kepler_system ) TO 'C:\\bootcamp\VisualProject\DataForD3.csv' CSV  HEADER WITH CSV DELIMITER ',';"
    #sql = f"copy (SELECT * FROM kepler_small) TO '{cwd}\static\DataForD3.csv' CSV;"
    sql = f"copy (SELECT * FROM kepler_system  ) TO '{cwd}\static\DataForD3.csv' CSV;"
    

    pprint("INSIDE ScRAPE4")

    cur.execute(sql)
    cur.close()


    # f = open(r'C:\\bootcamp\VisualProject\DataForD3.csv', 'w')
    # cur.copy_from(f, "kepler_system", sep=',')
    # f.close()

    return "Finished"