import requests
from bs4 import BeautifulSoup
import pandas as pd
import chart_studio.plotly as py
import chart_studio.tools as tls
import chart_studio
import plotly.express as px

URL = 'https://scholar.google.com/citations?user=RgxdCXQAAAAJ&hl=en'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
df = pd.DataFrame()
df['Year'] = pd.to_numeric([i.get_text() for i in soup.find_all(class_='gsc_g_t')])
df['Citations'] = pd.to_numeric([i.get_text() for i in soup.find_all(class_='gsc_g_al')])
total_citations = df['Citations'].sum()

'''
=========================================================================================
'''
fig = px.bar(df, x='Year', y='Citations',
             title = 'Total Citations: {}'.format(total_citations))
fig.update_traces(marker_color='#990A00',marker_line_width=1)
fig.update_layout({'plot_bgcolor': '#ACC1D5'})
fig.show()
'''
=========================================================================================
'''

chart_studio.tools.set_credentials_file(username='hclifford823', api_key='zrVsh0tcfILLshqesfga')
name = py.plot(fig, filename = 'Citations', auto_open=False)
url=str(name)
a=tls.get_embed(url)
print(a)
