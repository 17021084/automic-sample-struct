const Constant = {
  PaginateLengthMenu: [
    {
      value: 10,
      label: 10
    },
    {
      value: 20,
      label: 20
    }
  ],
  CellType: {
    ACTION_BUTTON_GROUP: 'ACTION_BUTTON_GROUP',
    ACTION_CELL: 'ACTION_CELL',
    IMAGE: 'IMAGE',
    RADIO_GROUP: 'RADIO_GROUP',
    GROUP: 'GROUP',
    TOGGLE: 'TOGGLE',
    DATE_TIME: 'DATE_TIME',
    ICON_BUTTON: 'ICON_BUTTON',
    COLOR_VIA_VALUE: 'COLOR_VIA_VALUE',
    DISPLAY: 'DISPLAY'
  },
  Status: [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'in_active' }
  ],
  Role: [
    { label: 'Admin', value: 'ADMIN' },
    { label: 'Staff', value: 'STAFF' }
  ],
  CellColor: {
    ACTIVE: 'active',
    INACTIVE: 'in_active'
  },
  sectionShare: [
    {
      value: 'general',
      label: 'General'
    },
    {
      value: 'private',
      label: 'Private'
    }
  ],
  Languages: [
    {
      label: 'English',
      value: 'en'
    },
    {
      label: 'Japanese',
      value: 'jp'
    }
  ],
  sectionType: [
    {
      value: 'single_choice',
      label: 'Single choice'
    },
    {
      value: 'multiple_choice',
      label: 'Multiple choice'
    },
    {
      value: 'image',
      label: 'Image'
    },
    {
      value: 'text',
      label: 'Text input'
    },
    {
      value: 'number',
      label: 'Number input'
    }
  ],
  unit: [
    {
      value: 'general',
      label: 'General'
    },
    {
      value: 'private',
      label: 'Private'
    }
  ],

  displayMode: [
    {
      value: 'auto',
      label: 'Auto'
    },
    {
      value: 'manual',
      label: 'Manual'
    },
    {
      value: 'hidden',
      label: 'Hidden'
    }
  ],
  DEFAULT_OPTIONS: [
    {
      value: 'auto',
      label: 'Auto'
    },
    {
      value: 'manual',
      label: 'Manual'
    },
    {
      value: 'hidden',
      label: 'Hidden'
    }
  ],
  commentType: [
    {
      value: 'all',
      label: 'All'
    },
    {
      value: 'random',
      label: 'Random'
    },
    {
      value: 'targetUsers',
      label: 'Target users'
    }
  ],
  presentationConfig: [
    {
      id: 0,
      index: 0,
      screenType: 'report_today',
      screenName: 'Report today',
      duration: 60
    },
    {
      id: 1,
      index: 1,
      screenType: 'report_yesterday',
      screenName: 'Report yesterday',
      duration: 60
    },
    {
      id: 2,
      index: 2,
      screenType: 'month_report_by_week',
      screenName: 'Month report by week',
      duration: 60
    },
    {
      id: 3,
      index: 3,
      screenType: 'month_report_by_date',
      screenName: 'Month report by date',
      duration: 60
    },
    {
      id: 4,
      index: 4,
      screenType: 'weekly_report',
      screenName: 'Weekly report',
      duration: 60
    },
    {
      id: 5,
      index: 5,
      screenType: 'comment_today',
      screenName: 'Comment today',
      commentType: 'random',
      commentOfUsers: [],
      duration: 60
    },
    {
      id: 6,
      index: 6,
      screenType: 'comment_yesterday',
      screenName: 'Comment yesterday',
      commentType: 'random',
      commentOfUsers: [],
      duration: 60
    }
  ],
  LOGIN_ROLE: [
    { value: 'agency', label: 'Agency' },
    { value: 'admin', label: 'Admin' }
  ]
}

export default Constant
