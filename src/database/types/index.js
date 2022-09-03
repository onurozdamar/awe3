export const RecordType = {
  columns: {
    id: 'INTEGER PRIMARY KEY NOT NULL',
    title: 'TEXT',
    date: 'TEXT',
  },
  className: 'Record',
};

export const AppointmentType = {
  columns: {
    id: 'INTEGER PRIMARY KEY NOT NULL',
    title: 'TEXT',
    date: 'TEXT',
    rezDate: 'TEXT',
    doctor: 'TEXT',
    recordId: 'INTEGER',
  },
  className: 'Appointment',
};

export const DragType = {
  columns: {
    id: 'INTEGER PRIMARY KEY NOT NULL',
    title: 'TEXT',
    date: 'TEXT',
    endDate: 'TEXT',
    frequency: 'TEXT',
    recordId: 'INTEGER',
  },
  className: 'Drag',
};

export const TaskType = {
  columns: {
    id: 'INTEGER PRIMARY KEY NOT NULL',
    title: 'TEXT',
    desc: 'TEXT',
    date: 'TEXT',
    endDate: 'TEXT',
    complete: 'TEXT',
    recordId: 'INTEGER',
  },
  className: 'Task',
};

export const QuickAddType = {
  columns: {
    id: 'INTEGER PRIMARY KEY NOT NULL',
    object: 'TEXT',
  },
  className: 'QuickAdd',
};
