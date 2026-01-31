import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'other';
  time: Date;
}

interface Conversation {
  id: string;
  user: string;
  lastMessage: string;
  time: Date;
  unread: number;
  avatar: string;
  messages: Message[];
}

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  selectedConversationId: string | null = null;
  newMessageText: string = '';

  conversations: Conversation[] = [
    {
      id: '1',
      user: 'Ali Reza',
      lastMessage: 'Is it still available?',
      time: new Date(),
      unread: 2,
      avatar: 'A',
      messages: [
        { id: '1', text: 'Hi, I saw your ad for the Corolla.', sender: 'other', time: new Date(Date.now() - 3600000) },
        { id: '2', text: 'Yes, it is available.', sender: 'me', time: new Date(Date.now() - 3500000) },
        { id: '3', text: 'Is it still available?', sender: 'other', time: new Date() }
      ]
    },
    {
      id: '2',
      user: 'Sarah Khan',
      lastMessage: 'Great, see you then.',
      time: new Date(Date.now() - 86400000),
      unread: 0,
      avatar: 'S',
      messages: [
        { id: '1', text: 'Can I see the laptop tomorrow?', sender: 'other', time: new Date(Date.now() - 90000000) },
        { id: '2', text: 'Sure, 5 PM works.', sender: 'me', time: new Date(Date.now() - 87000000) },
        { id: '3', text: 'Great, see you then.', sender: 'other', time: new Date(Date.now() - 86400000) }
      ]
    }
  ];

  get selectedConversation() {
    return this.conversations.find(c => c.id === this.selectedConversationId);
  }

  selectConversation(id: string) {
    this.selectedConversationId = id;
    // Mark as read logic would go here
  }

  sendMessage() {
    if (!this.newMessageText.trim() || !this.selectedConversation) return;

    this.selectedConversation.messages.push({
      id: Date.now().toString(),
      text: this.newMessageText,
      sender: 'me',
      time: new Date()
    });

    this.selectedConversation.lastMessage = this.newMessageText;
    this.newMessageText = '';
  }
}
