// Example
client.sendListMessage('<number>@c.us', {
    buttonText: 'Click here',
    description: 'Choose one option',
    sections: [
      {
        title: 'Section 1',
        rows: [
          {
            rowId: 'my_custom_id',
            title: 'Test 1',
            description: 'Description 1',
          },
          {
            rowId: '2',
            title: 'Test 2',
            description: 'Description 2',
          },
        ],
      },
    ],
  });